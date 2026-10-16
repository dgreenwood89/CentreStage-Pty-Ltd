# Frozen VIP Night RSVP: admin guide

Private page: **https://centrestage.org.au/frozenvip/**

The page is linked from the website footer as "VIP invitations", but not from the menu or site search. It is set to `noindex, nofollow, noarchive`, it is not in a sitemap, and it is deliberately **not** listed in `robots.txt` (listing it there would publish the address). Its link preview reads "CentreStage | Private invitation" with no Frozen artwork.

Note: `/frozenvip` is easy to guess. That is fine, because nothing is visible without a valid personal code, and codes are checked on Google's servers. If you would prefer a harder address, tell us and we will rename it.

## How it works

- The website is static (GitHub Pages), so it cannot check codes itself. A small **Google Apps Script** attached to a private Google Sheet does the server-side work: checking codes, enforcing the 2-ticket limit, saving RSVPs and sending emails.
- The guest list lives only in that Sheet. It never appears in the page source.
- Wix and member-only page settings do not apply to this site. The code gate, server checks and noindex settings are the protection.

## One-time setup (about 15 minutes)

1. Create a new Google Sheet in the CentreStage Google Workspace, named "Frozen VIP RSVPs". Share it only with the people who need it.
2. **Extensions > Apps Script**. Delete the sample code, paste in the whole of `vip-frozen-rsvp.gs`, and save.
3. Reload the Sheet. A **VIP RSVP** menu appears. Run **1. Set up sheets** and approve the permissions.
4. In Apps Script: **Deploy > New deployment > Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click Deploy and copy the Web app URL.
5. Send that URL to us (or paste it into `VIP.endpoint` near the top of the page logic). Until then the page runs in **preview mode**: the code `PREVIEW` works and nothing is saved.
6. From the **VIP RSVP** menu, run **Send a test confirmation email to me**.

## Adding guests and codes

1. In the **Guests** tab, add one row per invitation: **Invitee name**, **Invitee email**, and **Tickets allowed** (leave blank for 2; use 1 for single invitations).
   - To bulk upload, use **File > Import > Upload** with your CSV and choose "Append to current sheet". Match the column names above.
2. Run **VIP RSVP > 2. Generate missing codes**. Each new row gets a 7-character code (no O, 0, I, 1 or L), a status of "Not opened" and a **Personal link** such as `https://centrestage.org.au/frozenvip/?code=K7M3XQ2`.
3. Use the Personal link column in your mail merge. Guests who follow it skip typing their code, and the code is removed from the address bar straight away.

Status updates automatically: **Not opened > Opened > Submitted**.

## Changing times and dates

Open the **Config** tab and edit the **Value** column. Changes appear on the page the next time a guest enters their code. No website update needed.

| Setting | Current value |
|---|---|
| VIP opens | 6:00pm. VIP lounge opens with pre-show entertainment and a private Q and A |
| Theatre doors open | 7:00pm |
| Show begins | 7:30pm |
| Dress code | Blue with a touch of sparkle (optional) |
| RSVP close date (shown) | Sunday 14 February 2027 |
| RSVP close date (enforced) | 2027-02-14 |
| VIP pack delivery cut-off | [VIP PACK DELIVERY CUT-OFF DATE] |

Anything still in square brackets shows on the page as a highlighted placeholder, so it is easy to spot before launch. After the enforced close date, guests can still view their RSVP but cannot change it, and new RSVPs are refused.

## Exporting RSVPs

Run **VIP RSVP > 3. Build export tabs**. Three tabs are rebuilt:

- **Export · All RSVPs**: every submitted RSVP.
- **Export · Guests TBC**: two-ticket RSVPs where the guest's name, email or dietary needs are still TBC.
- **Export · VIP pack deliveries**: names, phone numbers and full delivery addresses.

Open a tab and choose **File > Download > Comma-separated values (.csv)**.

Seat allocation follows RSVP order: sort **Export · All RSVPs** by **Submitted at**. Updates do not change a guest's original Submitted at time.

## Emails

- The invitee receives a confirmation with the full details and a calendar file attached.
- If they bring a guest with a real email address, the guest receives a copy too.
- david@ and martin@ receive a notification with every answer.
- If a guest updates their RSVP, everyone receives an "updated" version.

## Security notes

- Every code is checked on the server, and the server re-checks the code and the ticket limit when the form is submitted.
- One RSVP per code. Returning guests see and edit their saved answers, so no duplicates are created.
- After 5 wrong codes, a device is locked out for 15 minutes. Apps Script cannot see IP addresses, so there is also a site-wide limit of 200 failed attempts per 10 minutes. With 7-character codes there are over 27 billion combinations, so guessing is not realistic.
- The page has no analytics or tracking pixels, and no embedded map (the "Get directions" button opens Google Maps instead).

## Keeping the website copy in sync

The private page is served from `frozenvip/index.html`, a copy of the main site file with the private-invitation preview text built in. Whenever the website is re-exported, that copy is regenerated too.
