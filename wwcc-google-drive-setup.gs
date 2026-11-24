/**
 * CentreStage — WWCC submission receiver
 * =====================================================================
 * Saves volunteer Working with Children Check submissions straight into
 * the CentreStage Google Drive folder, and appends a row to a log sheet.
 *
 * HOW TO DEPLOY (about 5 minutes, once only)
 * ---------------------------------------------------------------------
 *  1. Go to  https://script.google.com  and click "New project".
 *  2. Delete everything in the editor and paste this entire file in.
 *  3. Click the Save icon. Name the project "CentreStage WWCC".
 *  4. Click "Deploy" (top right) -> "New deployment".
 *  5. Click the gear next to "Select type" and choose "Web app".
 *  6. Set:
 *        Description     : WWCC receiver
 *        Execute as      : Me
 *        Who has access  : Anyone
 *     ("Anyone" is required so the website can post to it. The URL is
 *      unguessable and only accepts WWCC submissions.)
 *  7. Click Deploy. Approve the permissions prompt when asked
 *     (choose your CentreStage Google account, then "Advanced" ->
 *      "Go to CentreStage WWCC (unsafe)" -> Allow. This warning is
 *      normal for your own scripts.)
 *  8. Copy the "Web app URL" it gives you. It looks like:
 *        https://script.google.com/macros/s/AKfy..../exec
 *  9. Send that URL to Claude, or paste it yourself into the website:
 *     open index.html, find WWCC_ENDPOINT and replace the empty
 *     string with your URL.
 *
 * That's it. Every submission then lands in the Drive folder below as
 * an image/PDF named with the volunteer's name and date, and a row is
 * added to a "WWCC Submissions Log" spreadsheet in the same folder.
 * =====================================================================
 */

// The CentreStage Drive folder submissions are saved into.
var FOLDER_ID = '1tVwES5l6Pq-3zNv1WJExgamJG78VcA7s';

// Name of the log spreadsheet created inside that folder.
var LOG_NAME = 'WWCC Submissions Log';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var folder = DriveApp.getFolderById(FOLDER_ID);

    var safeName = String(data.fullName || 'Unknown')
      .replace(/[^A-Za-z0-9 \-']/g, '')
      .trim() || 'Unknown';
    var stampFile = Utilities.formatDate(new Date(), 'Australia/Melbourne', 'yyyy-MM-dd');

    // ---- save the card image / PDF ----
    var fileUrl = '';
    var fileName = '';
    if (data.fileData) {
      var parts = String(data.fileData).split(',');
      var meta = parts[0] || '';
      var b64 = parts.length > 1 ? parts[1] : parts[0];
      var mime = (meta.match(/data:([^;]+);/) || [])[1] || 'application/octet-stream';
      var ext = mime.indexOf('pdf') > -1 ? 'pdf'
              : mime.indexOf('png') > -1 ? 'png'
              : mime.indexOf('webp') > -1 ? 'webp'
              : 'jpg';
      fileName = 'WWCC - ' + safeName + ' - ' + stampFile + '.' + ext;
      var blob = Utilities.newBlob(Utilities.base64Decode(b64), mime, fileName);
      var file = folder.createFile(blob);
      fileUrl = file.getUrl();
    }

    // ---- append to the log sheet ----
    var sheet = getLogSheet_(folder);
    sheet.appendRow([
      data.submittedAt || new Date().toString(),
      data.fullName || '',
      data.preferredName || '',
      data.email || '',
      data.phone || '',
      data.cardType || '',
      data.cardNumber || '',
      data.cardExpiry || '',
      data.agreedAll ? 'YES' : 'NO',
      fileName,
      fileUrl
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, service: 'CentreStage WWCC receiver' });
}

function getLogSheet_(folder) {
  var it = folder.getFilesByName(LOG_NAME);
  var ss;
  if (it.hasNext()) {
    ss = SpreadsheetApp.open(it.next());
  } else {
    ss = SpreadsheetApp.create(LOG_NAME);
    var f = DriveApp.getFileById(ss.getId());
    folder.addFile(f);
    DriveApp.getRootFolder().removeFile(f);
    ss.getActiveSheet().appendRow([
      'Submitted at', 'Full legal name', 'Preferred name', 'Email', 'Mobile',
      'Card type', 'Card number', 'Card expiry', 'Agreed to all terms',
      'Card file name', 'Card file link'
    ]);
    ss.getActiveSheet().setFrozenRows(1);
  }
  return ss.getActiveSheet();
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
