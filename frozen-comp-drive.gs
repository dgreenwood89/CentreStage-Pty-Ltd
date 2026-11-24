/**
 * CentreStage | Frozen Colouring Competition uploads to Google Drive
 * Setup: script.google.com > New project > paste this > Deploy > New deployment
 * > Type: Web app > Execute as: Me > Who has access: Anyone > Deploy > copy the /exec URL.
 */
const PARENT_FOLDER = 'Frozen';
const ENTRIES_FOLDER = 'Colouring Competition Entries';
const NOTIFY = 'david@centrestage.org.au';

function getFolder_() {
  const p = DriveApp.getFoldersByName(PARENT_FOLDER);
  const parent = p.hasNext() ? p.next() : DriveApp.createFolder(PARENT_FOLDER);
  const e = parent.getFoldersByName(ENTRIES_FOLDER);
  return e.hasNext() ? e.next() : parent.createFolder(ENTRIES_FOLDER);
}

function getSheet_(folder) {
  const it = folder.getFilesByName('Entries register');
  let ss;
  if (it.hasNext()) ss = SpreadsheetApp.open(it.next());
  else {
    ss = SpreadsheetApp.create('Entries register');
    DriveApp.getFileById(ss.getId()).moveTo(folder);
    ss.getSheets()[0].appendRow(['Received','Child','Age','School','Parent or guardian','Email','Phone','Suburb','Share on social media','Artwork file','Artwork link']);
  }
  return ss.getSheets()[0];
}

function doPost(e) {
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const f = d.fields || {};
    const age = parseInt(f['Age'], 10);
    if (!(age >= 1 && age <= 16)) throw new Error('Invalid age');
    const mime = String(d.mimeType || '');
    if (!/^image\/|application\/pdf/.test(mime)) throw new Error('Invalid file type');
    const bytes = Utilities.base64Decode(d.data);
    if (bytes.length > 10 * 1024 * 1024) throw new Error('File too large');
    const folder = getFolder_();
    const stamp = Utilities.formatDate(new Date(), 'Australia/Melbourne', 'yyyy-MM-dd HHmm');
    const safe = String(f['Child'] || 'entry').replace(/[^\w\- ]/g, '').trim();
    const ext = (String(d.fileName || '').match(/\.[a-z0-9]+$/i) || ['.jpg'])[0];
    const file = folder.createFile(Utilities.newBlob(bytes, mime, stamp + ' ' + safe + ' age ' + age + ext));
    getSheet_(folder).appendRow([stamp, f['Child'], age, f['School'], f['Parent or guardian'], f['email'], f['Phone'], f['Suburb'], f['Share on social media'], file.getName(), file.getUrl()]);
    MailApp.sendEmail(NOTIFY, 'Colouring comp entry: ' + f['Child'] + ', age ' + age, 'New entry saved to Drive:\n' + file.getUrl());
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}
