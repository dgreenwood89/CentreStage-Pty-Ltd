/**
 * CentreStage · Frozen VIP Night RSVP backend
 * Google Apps Script web app, bound to a private Google Sheet.
 *
 * The website never sees the guest list. Every code check and every RSVP
 * is validated here, on Google's servers.
 *
 * Setup and day-to-day use: see VIP-Frozen-RSVP-Admin-Guide.md
 */

const SITE_URL = "https://centrestage.org.au/frozenvip/";
const NOTIFY = ["david@centrestage.org.au", "martin@centrestage.org.au"];
const REPLY_TO = "martin@centrestage.org.au";
const SENDER_NAME = "CentreStage";
const ASSETS = "https://centrestage.org.au/assets/";

const SHEET_GUESTS = "Guests";
const SHEET_CONFIG = "Config";
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no O, 0, I, 1, L
const CODE_LENGTH = 7;
const MAX_FAILS = 5;            // per device
const LOCK_SECONDS = 15 * 60;   // 15 minutes
const GLOBAL_FAILS = 200;       // across all devices per 10 minutes
const TZ = "Australia/Melbourne";

const COLS = ["Code", "Invitee name", "Invitee email", "Tickets allowed", "Status", "Opened at", "Submitted at", "Updated at",
  "Tickets", "Full name", "Email", "Phone", "Dietary", "Dietary detail",
  "Guest name", "Guest email", "Guest dietary", "Guest dietary detail", "Guest TBC",
  "Special requests", "VIP pack", "Pack method", "Street", "Suburb", "State", "Postcode", "Privacy consent", "Personal link"];

const MAP = {
  tickets: "Tickets", name: "Full name", email: "Email", phone: "Phone", diet: "Dietary", dietNote: "Dietary detail",
  gName: "Guest name", gEmail: "Guest email", gDiet: "Guest dietary", gDietNote: "Guest dietary detail", gTbc: "Guest TBC",
  requests: "Special requests", pack: "VIP pack", packMode: "Pack method", street: "Street", suburb: "Suburb",
  state: "State", postcode: "Postcode", consent: "Privacy consent",
};
const BOOL = { gTbc: 1, pack: 1, consent: 1 };

// key, label shown in the sheet, starting value
const CONFIG_ROWS = [
  ["arrival", "VIP opens (shown to guests)", "6:00pm. VIP lounge opens with pre-show entertainment and a private Q and A"],
  ["meet", "Theatre doors open", "7:00pm"],
  ["curtain", "Show begins", "7:30pm"],
  ["dress", "Dress code", "Blue with a touch of sparkle (optional)"],
  ["close", "RSVP close date (shown to guests)", "Sunday 14 February 2027"],
  ["closeAt", "RSVP close date (enforced, YYYY-MM-DD, last day RSVPs are accepted)", "2027-02-14"],
  ["cutoff", "VIP pack delivery cut-off date", "[VIP PACK DELIVERY CUT-OFF DATE]"],
];

// ─────────────────────────────────────────────────────────────
// Menu
// ─────────────────────────────────────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi().createMenu("VIP RSVP")
    .addItem("1. Set up sheets", "setupSheets")
    .addItem("2. Generate missing codes", "generateCodes")
    .addItem("3. Build export tabs", "buildExports")
    .addSeparator()
    .addItem("Send a test confirmation email to me", "sendTestEmail")
    .addToUi();
}

function setupSheets() {
  const ss = SpreadsheetApp.getActive();
  let g = ss.getSheetByName(SHEET_GUESTS);
  if (!g) g = ss.insertSheet(SHEET_GUESTS);
  const have = g.getLastColumn() ? g.getRange(1, 1, 1, g.getLastColumn()).getValues()[0] : [];
  COLS.forEach((c) => { if (have.indexOf(c) < 0) { g.getRange(1, g.getLastColumn() + 1).setValue(c); } });
  g.setFrozenRows(1);
  g.getRange(1, 1, 1, g.getLastColumn()).setFontWeight("bold");

  let c = ss.getSheetByName(SHEET_CONFIG);
  if (!c) {
    c = ss.insertSheet(SHEET_CONFIG);
    c.getRange(1, 1, 1, 3).setValues([["Key (do not edit)", "Setting", "Value"]]).setFontWeight("bold");
    c.getRange(2, 1, CONFIG_ROWS.length, 3).setValues(CONFIG_ROWS);
    c.setColumnWidth(2, 380); c.setColumnWidth(3, 420);
  }
  SpreadsheetApp.getUi().alert("Sheets are ready. Paste or import your guest list into the Guests tab (Invitee name, Invitee email, and optionally Tickets allowed), then run 2. Generate missing codes.");
}

// ─────────────────────────────────────────────────────────────
// Web app
// ─────────────────────────────────────────────────────────────
function doGet() { return out({ ok: false }); }

function doPost(e) {
  let body = {};
  try { body = JSON.parse((e && e.postData && e.postData.contents) || "{}"); } catch (err) { return out({ ok: false }); }
  const device = String(body.device || "anon").slice(0, 64);
  if (isLocked(device)) return out({ ok: false, locked: true });

  const code = cleanCode(body.code);
  const found = code ? findGuest(code) : null;
  if (!found) { registerFail(device); return out({ ok: false }); }
  CacheService.getScriptCache().remove("f:" + device);

  if (body.action === "check") return out(check(found));
  if (body.action === "submit") return out(submit(found, body.answers || {}));
  return out({ ok: false });
}

function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function cleanCode(c) { return String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12); }

// ─────────────────────────────────────────────────────────────
// Rate limiting (Apps Script cannot see IP addresses, so we limit by device
// and also apply a global ceiling to stop distributed guessing)
// ─────────────────────────────────────────────────────────────
function isLocked(device) {
  const cache = CacheService.getScriptCache();
  if (Number(cache.get("g") || 0) >= GLOBAL_FAILS) return true;
  return Number(cache.get("f:" + device) || 0) >= MAX_FAILS;
}
function registerFail(device) {
  const cache = CacheService.getScriptCache();
  cache.put("f:" + device, String(Number(cache.get("f:" + device) || 0) + 1), LOCK_SECONDS);
  cache.put("g", String(Number(cache.get("g") || 0) + 1), 600);
}

// ─────────────────────────────────────────────────────────────
// Guest lookups
// ─────────────────────────────────────────────────────────────
function guestSheet() { return SpreadsheetApp.getActive().getSheetByName(SHEET_GUESTS); }

function findGuest(code) {
  const sh = guestSheet();
  if (!sh || sh.getLastRow() < 2) return null;
  const values = sh.getDataRange().getValues();
  const head = values[0];
  const ci = head.indexOf("Code");
  for (let r = 1; r < values.length; r++) {
    if (String(values[r][ci]).toUpperCase().trim() === code) return { sh, row: r + 1, head, vals: values[r] };
  }
  return null;
}

function cell(found, col) { const i = found.head.indexOf(col); return i < 0 ? "" : found.vals[i]; }
function setCell(found, col, v) { const i = found.head.indexOf(col); if (i >= 0) found.sh.getRange(found.row, i + 1).setValue(v); }

function getConfig() {
  const c = SpreadsheetApp.getActive().getSheetByName(SHEET_CONFIG);
  const cfg = {};
  if (!c) return cfg;
  c.getDataRange().getValues().slice(1).forEach((r) => { if (r[0]) cfg[r[0]] = r[2] instanceof Date ? Utilities.formatDate(r[2], TZ, "yyyy-MM-dd") : String(r[2]); });
  return cfg;
}

function isClosed(cfg) {
  const at = String(cfg.closeAt || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(at)) return false;
  return Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd") > at;
}

function allowedFor(found) { const n = parseInt(cell(found, "Tickets allowed"), 10) || 2; return Math.min(2, Math.max(1, n)); }

function readAnswers(found) {
  const a = {};
  Object.keys(MAP).forEach((k) => {
    let v = cell(found, MAP[k]);
    if (BOOL[k]) v = String(v).toLowerCase() === "yes";
    else if (k === "tickets") v = parseInt(v, 10) || 0;
    else if (k === "packMode") v = String(v).toLowerCase().indexOf("deliver") === 0 ? "deliver" : String(v).toLowerCase().indexOf("collect") === 0 ? "collect" : "";
    else v = v == null ? "" : String(v);
    a[k] = v;
  });
  return a;
}

// ─────────────────────────────────────────────────────────────
// Actions
// ─────────────────────────────────────────────────────────────
function check(found) {
  const cfg = getConfig();
  const status = String(cell(found, "Status") || "");
  if (!status || status === "Not opened") {
    setCell(found, "Status", "Opened");
    setCell(found, "Opened at", new Date());
  }
  const submitted = status === "Submitted";
  const pub = {};
  ["arrival", "meet", "curtain", "dress", "close", "cutoff"].forEach((k) => { if (cfg[k]) pub[k] = cfg[k]; });
  return {
    ok: true,
    name: String(cell(found, "Invitee name") || ""),
    email: String(cell(found, "Invitee email") || ""),
    allowed: allowedFor(found),
    submitted,
    closed: isClosed(cfg),
    answers: submitted ? readAnswers(found) : null,
    config: pub,
  };
}

function validate(a, allowed) {
  const s = (x) => String(x == null ? "" : x).trim();
  const em = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const tbc = (x) => s(x).toUpperCase() === "TBC";
  const diets = ["None", "Vegetarian", "Vegan", "Gluten free", "Dairy free", "Nut allergy", "Other"];
  const t = parseInt(a.tickets, 10);
  if (!(t === 1 || t === 2) || t > allowed) return "Please choose 1 or 2 tickets.";
  if (!s(a.name)) return "Please enter your full name.";
  if (!em.test(s(a.email))) return "Please enter a valid email address.";
  if (!/^(\+?61|0)[2-478]\d{8}$/.test(s(a.phone).replace(/[\s().-]/g, ""))) return "Please enter a valid Australian phone number.";
  if (diets.indexOf(s(a.diet)) < 0) return "Please choose your dietary requirements.";
  if (s(a.diet) === "Other" && !s(a.dietNote)) return "Please tell us your dietary requirements.";
  if (t === 2) {
    if (!s(a.gName)) return "Please enter your guest's name, or TBC.";
    if (!(tbc(a.gEmail) || em.test(s(a.gEmail)))) return "Please enter a valid guest email, or TBC.";
    if (diets.concat(["TBC"]).indexOf(s(a.gDiet)) < 0) return "Please choose your guest's dietary requirements, or TBC.";
    if (s(a.gDiet) === "Other" && !s(a.gDietNote)) return "Please tell us your guest's dietary requirements.";
  }
  if (a.pack === true) {
    if (a.packMode !== "deliver" && a.packMode !== "collect") return "Please choose VIP pack delivery or collection.";
    if (a.packMode === "deliver") {
      if (!s(a.street) || !s(a.suburb) || !s(a.state) || !/^\d{4}$/.test(s(a.postcode))) return "Please complete your delivery address.";
    }
  }
  if (a.consent !== true) return "Please agree to the collection notice.";
  return "";
}

function submit(found, raw) {
  const cfg = getConfig();
  if (isClosed(cfg)) return { ok: false, error: "RSVPs have now closed. Please contact martin@centrestage.org.au." };
  const allowed = allowedFor(found);
  const a = {};
  Object.keys(MAP).forEach((k) => {
    const v = raw[k];
    a[k] = BOOL[k] ? v === true : k === "tickets" ? parseInt(v, 10) : String(v == null ? "" : v).trim().slice(0, 500);
  });
  if (a.tickets !== 2) { a.gName = ""; a.gEmail = ""; a.gDiet = ""; a.gDietNote = ""; a.gTbc = false; }
  if (!a.pack) a.packMode = "";
  if (a.packMode !== "deliver") { a.street = ""; a.suburb = ""; a.state = ""; a.postcode = ""; }

  const problem = validate(a, allowed);
  if (problem) return { ok: false, error: problem };

  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  let isUpdate = false;
  try {
    const fresh = findGuest(String(cell(found, "Code")).toUpperCase());
    isUpdate = String(cell(fresh, "Status")) === "Submitted";
    Object.keys(MAP).forEach((k) => {
      let v = a[k];
      if (BOOL[k]) v = v ? "Yes" : "No";
      if (k === "packMode") v = v === "deliver" ? "Deliver" : v === "collect" ? "Collect on the evening" : "";
      setCell(fresh, MAP[k], v);
    });
    const now = new Date();
    if (!isUpdate) setCell(fresh, "Submitted at", now);
    setCell(fresh, "Updated at", now);
    setCell(fresh, "Status", "Submitted");
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  try { sendEmails(a, cfg, isUpdate); } catch (err) { console.error(err); }
  return { ok: true };
}

// ─────────────────────────────────────────────────────────────
// Email
// ─────────────────────────────────────────────────────────────
function icsBlob() {
  const esc = (s) => s.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
  const loc = "Geelong Arts Centre, Ryrie Street Entrance, 50 Little Malop Street, Geelong VIC 3220";
  const desc = "CentreStage VIP Night for Disney's Frozen, The Broadway Musical. Please arrive via the Ryrie Street Entrance. VIP lounge opens 6:00pm with pre-show entertainment and a private Q and A. Theatre doors open 7:00pm. Show begins 7:30pm.";
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CentreStage//Frozen VIP Night//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "BEGIN:VEVENT", "UID:frozen-vip-night-2027@centrestage.org.au",
    "DTSTAMP:" + Utilities.formatDate(new Date(), "UTC", "yyyyMMdd'T'HHmmss'Z'"),
    "DTSTART:20270306T070000Z", "DTEND:20270306T110000Z",
    "SUMMARY:" + esc("Frozen VIP Night (CentreStage)"), "LOCATION:" + esc(loc), "DESCRIPTION:" + esc(desc),
    "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  return Utilities.newBlob(ics, "text/calendar", "Frozen-VIP-Night.ics");
}

function h(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

function summaryRows(a) {
  const guest = a.tickets === 2 ? "2 tickets, you and " + (a.gName && a.gName.toUpperCase() !== "TBC" ? a.gName : "your guest (details TBC)") : "1 ticket";
  const pack = !a.pack ? "Not requested" : a.packMode === "deliver"
    ? "Delivery to " + [a.street, a.suburb, a.state, a.postcode].filter(String).join(", ")
    : "Collect on arrival at the Ryrie Street Entrance";
  const rows = [
    ["Date", "Saturday 6 March 2027"],
    ["Time", "6:00pm to 10:00pm"],
    ["Venue", "Geelong Arts Centre, 50 Little Malop Street, Geelong VIC 3220"],
    ["Arrival", "Ryrie Street Entrance"],
    ["Tickets", guest],
    ["Name on ticket", a.name],
    ["Dietary", a.diet + (a.dietNote ? " (" + a.dietNote + ")" : "")],
    ["VIP pack", pack],
  ];
  if (a.requests) rows.push(["Special requests", a.requests]);
  return rows;
}

function confirmationHtml(a, cfg, isUpdate) {
  const first = String(a.name || "").split(/\s+/)[0] || "there";
  const rows = summaryRows(a).map((r) =>
    '<tr><td style="padding:12px 0;border-bottom:1px solid #D9D5CC;font:600 11px/1.4 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#55606E;width:150px;vertical-align:top;">' + h(r[0]) +
    '</td><td style="padding:12px 0;border-bottom:1px solid #D9D5CC;font:16px/1.5 Arial,sans-serif;color:#0A0A0A;">' + h(r[1]) + "</td></tr>").join("");
  const schedule = [["VIP opens", cfg.arrival], ["Theatre doors", cfg.meet], ["Show begins", cfg.curtain], ["Dress code", cfg.dress]]
    .filter((r) => r[1] && String(r[1]).charAt(0) !== "[")
    .map((r) => '<p style="margin:0 0 6px;font:15px/1.5 Arial,sans-serif;color:#3A3A37;"><strong>' + h(r[0]) + ":</strong> " + h(r[1]) + "</p>").join("");
  return '<!DOCTYPE html><html><body style="margin:0;background:#F4F1EA;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F1EA;"><tr><td align="center" style="padding:24px 12px;">' +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;">' +
    '<tr><td style="background:#04101F;padding:32px 36px 36px;text-align:center;">' +
    '<img src="' + ASSETS + 'CentreStage-Solid-White.png" alt="CentreStage" width="120" style="display:block;margin:0 auto 28px;width:120px;height:auto;">' +
    '<img src="' + ASSETS + 'frozen-title-dark.png" alt="Disney\'s Frozen, The Broadway Musical" width="300" style="display:block;margin:0 auto;width:300px;max-width:100%;height:auto;">' +
    '<p style="margin:26px 0 0;font:600 11px/1.4 Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#7FD3FF;">Frozen VIP Night</p>' +
    '<p style="margin:10px 0 0;font:30px/1.15 Georgia,serif;color:#FFFFFF;">Saturday 6 March 2027</p></td></tr>' +
    '<tr><td style="padding:36px 36px 8px;">' +
    '<p style="margin:0 0 16px;font:24px/1.25 Georgia,serif;color:#0A0A0A;">' + (isUpdate ? "Your RSVP has been updated, " : "Thank you, ") + h(first) + ".</p>" +
    '<p style="margin:0 0 24px;font:16px/1.6 Arial,sans-serif;color:#3A3A37;">We can\'t wait to welcome you to the Frozen VIP Night at the Geelong Arts Centre. Your invitation is complimentary. Seats are allocated in the order RSVPs are received.</p>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + rows + "</table></td></tr>" +
    '<tr><td style="padding:24px 36px 0;"><div style="background:#0A2646;padding:20px 22px;font:20px/1.3 Georgia,serif;color:#FFFFFF;">Please arrive via the Ryrie Street Entrance.</div></td></tr>' +
    (schedule ? '<tr><td style="padding:24px 36px 0;">' + schedule + "</td></tr>" : "") +
    '<tr><td style="padding:24px 36px 32px;"><p style="margin:0 0 10px;font:15px/1.6 Arial,sans-serif;color:#3A3A37;">A calendar invitation is attached. Need to change something? Return to your invitation page and enter your personal code. You can update your RSVP until ' + h(cfg.close || "RSVPs close") + ".</p>" +
    '<p style="margin:0;font:15px/1.6 Arial,sans-serif;color:#3A3A37;">Enquiries: Martin Nguyen, Producer, <a href="mailto:martin@centrestage.org.au" style="color:#1E63AE;">martin@centrestage.org.au</a></p></td></tr>' +
    '<tr><td style="background:#04101F;padding:22px 36px;font:12px/1.6 Arial,sans-serif;color:#8FB3D6;">Disney\'s Frozen, The Broadway Musical. Presented by CentreStage. Frozen is a registered trademark of Disney. Artwork &copy;Disney.</td></tr>' +
    "</table></td></tr></table></body></html>";
}

function sendEmails(a, cfg, isUpdate) {
  const subject = isUpdate ? "Your Frozen VIP Night RSVP has been updated" : "You're confirmed: Frozen VIP Night, Saturday 6 March 2027";
  const html = confirmationHtml(a, cfg, isUpdate);
  const plain = summaryRows(a).map((r) => r[0] + ": " + r[1]).join("\n") + "\n\nPlease arrive via the Ryrie Street Entrance.";
  MailApp.sendEmail({ to: a.email, subject, htmlBody: html, body: plain, attachments: [icsBlob()], name: SENDER_NAME, replyTo: REPLY_TO });

  const gEmail = String(a.gEmail || "");
  if (a.tickets === 2 && gEmail && gEmail.toUpperCase() !== "TBC" && gEmail.toLowerCase() !== a.email.toLowerCase()) {
    MailApp.sendEmail({ to: gEmail, subject: "You're invited as a guest: Frozen VIP Night, Saturday 6 March 2027", htmlBody: html, body: plain, attachments: [icsBlob()], name: SENDER_NAME, replyTo: REPLY_TO });
  }

  const all = Object.keys(MAP).map((k) => {
    let v = a[k]; if (BOOL[k]) v = v ? "Yes" : "No";
    return '<tr><td style="padding:6px 12px 6px 0;font:13px Arial;color:#55606E;">' + h(MAP[k]) + '</td><td style="padding:6px 0;font:14px Arial;">' + h(v) + "</td></tr>";
  }).join("");
  MailApp.sendEmail({
    to: NOTIFY.join(","),
    subject: (isUpdate ? "Updated" : "New") + " Frozen VIP RSVP: " + a.name + " (" + a.tickets + ")",
    htmlBody: "<table>" + all + "</table>",
    name: SENDER_NAME,
  });
}

function sendTestEmail() {
  const me = Session.getActiveUser().getEmail();
  const sample = { tickets: 2, name: "Jane Citizen", email: me, phone: "0412 345 678", diet: "Vegetarian", dietNote: "", gName: "TBC", gEmail: "TBC", gDiet: "TBC", gDietNote: "", gTbc: true, requests: "Aisle seat please", pack: true, packMode: "collect", street: "", suburb: "", state: "", postcode: "", consent: true };
  MailApp.sendEmail({ to: me, subject: "[TEST] You're confirmed: Frozen VIP Night", htmlBody: confirmationHtml(sample, getConfig(), false), attachments: [icsBlob()], name: SENDER_NAME });
  SpreadsheetApp.getUi().alert("Test email sent to " + me);
}

// ─────────────────────────────────────────────────────────────
// Codes
// ─────────────────────────────────────────────────────────────
function generateCodes() {
  const sh = guestSheet();
  const values = sh.getDataRange().getValues();
  const head = values[0];
  const ci = head.indexOf("Code"), ni = head.indexOf("Invitee name"), ti = head.indexOf("Tickets allowed"), si = head.indexOf("Status"), li = head.indexOf("Personal link");
  const used = {};
  values.slice(1).forEach((r) => { if (r[ci]) used[String(r[ci]).toUpperCase()] = 1; });
  let made = 0;
  for (let r = 1; r < values.length; r++) {
    if (!values[r][ni] || values[r][ci]) continue;
    let code;
    do { code = ""; for (let i = 0; i < CODE_LENGTH; i++) code += CODE_ALPHABET.charAt(Math.floor(Math.random() * CODE_ALPHABET.length)); } while (used[code]);
    used[code] = 1;
    sh.getRange(r + 1, ci + 1).setValue(code);
    if (!values[r][ti]) sh.getRange(r + 1, ti + 1).setValue(2);
    if (!values[r][si]) sh.getRange(r + 1, si + 1).setValue("Not opened");
    sh.getRange(r + 1, li + 1).setValue(SITE_URL + "?code=" + code);
    made++;
  }
  SpreadsheetApp.getUi().alert(made + " code(s) generated.");
}

// ─────────────────────────────────────────────────────────────
// Exports (File > Download > CSV on any export tab)
// ─────────────────────────────────────────────────────────────
function buildExports() {
  const ss = SpreadsheetApp.getActive();
  const values = guestSheet().getDataRange().getValues();
  const head = values[0], rows = values.slice(1);
  const col = (r, n) => r[head.indexOf(n)];
  const submitted = rows.filter((r) => col(r, "Status") === "Submitted");
  const isTbc = (v) => String(v).toUpperCase() === "TBC";
  const tbc = submitted.filter((r) => Number(col(r, "Tickets")) === 2 && (isTbc(col(r, "Guest name")) || isTbc(col(r, "Guest email")) || isTbc(col(r, "Guest dietary"))));
  const deliveries = submitted.filter((r) => String(col(r, "VIP pack")) === "Yes" && String(col(r, "Pack method")) === "Deliver");

  write(ss, "Export · All RSVPs", head, submitted);
  const tHead = ["Code", "Full name", "Email", "Phone", "Guest name", "Guest email", "Guest dietary", "Updated at"];
  write(ss, "Export · Guests TBC", tHead, tbc.map((r) => tHead.map((n) => col(r, n))));
  const dHead = ["Code", "Full name", "Phone", "Email", "Street", "Suburb", "State", "Postcode"];
  write(ss, "Export · VIP pack deliveries", dHead, deliveries.map((r) => dHead.map((n) => col(r, n))));
  SpreadsheetApp.getUi().alert("Exports rebuilt: " + submitted.length + " RSVPs, " + tbc.length + " with guest TBC, " + deliveries.length + " deliveries.\nOpen a tab and use File > Download > Comma-separated values.");
}

function write(ss, name, head, rows) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name); else sh.clear();
  sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight("bold");
  if (rows.length) sh.getRange(2, 1, rows.length, head.length).setValues(rows);
  sh.setFrozenRows(1);
}
