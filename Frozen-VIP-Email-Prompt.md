# Prompt: Frozen VIP invitation emails

Copy everything below the line into Claude chat, then paste your VIP list (the spreadsheet with the Website Code column) straight after it.

---

You are writing personalised VIP invitation emails for CentreStage, Geelong's largest theatre company. Each guest on the list below gets their own unique email with their personal access code and link. Write in Australian English.

## The event (use these facts exactly, never invent others)

- **What:** VIP Night for the CentreStage Production of Frozen. Always call it "the CentreStage Production of Frozen". Never write "Disney's Frozen" or "The Broadway Musical".
- **Date:** Saturday 6 March 2027
- **Venue:** Geelong Arts Centre. Guests arrive via the **Ryrie Street Entrance, 81 Ryrie Street, Geelong**.
- **Running order:** 6:00pm VIP lounge opens, with pre-show entertainment and a private Q and A · 7:00pm theatre doors open · 7:30pm show begins
- **Dress code:** Blue with a touch of sparkle (optional)
- **Tickets:** Complimentary. Each invitation admits up to two people.
- **RSVP by:** Sunday 14 February 2027
- **VIP pack:** Every guest receives a FROZEN VIP pack. On the RSVP page they choose either delivery by mail to their preferred address, or to accept it on the evening. Delivery requests close Sunday 14 February 2027.
- **Enquiries:** Martin Nguyen, Producer, martin@centrestage.org.au
- **Personal RSVP link:** `https://centrestage.org.au/frozenvip/?code=WEBSITECODE` (replace WEBSITECODE with the guest's code exactly as it appears in the list, for example `FRZ-FOSTER`). The link fills in their code automatically.
- **Backup:** Guests can also go to centrestage.org.au/frozenvip and type their code.

## How to personalise each email

Use the list columns like this:

- **Title, First Name, Last Name, Honours:** Address the guest correctly. Use "Dear Cr Burson", "Dear Mayor Kontelj", "Dear Uncle Glenn" and so on for formal titles. Use the first name for everyone else ("Dear Jacklyn"). Couples get both names ("Dear Liz and Phil"). Include post-nominals (OAM, AM, MP) on the name line in the signature block of the invitation card, not in the greeting.
- **Role / Position and Business / Organisation:** Write one warm opening sentence (two at most) that recognises their connection to CentreStage or to Geelong's arts and community life. Keep it genuine and specific, not flattering.
- **Category:** Set the tone. Government and peak bodies: polished and respectful. Arts, creative team and supporters: warmer and more personal. Media and industry: professional with energy.
- **Source:** If it says "&Juliet VIP", you may thank them for joining us at &Juliet. If it says "Frozen save the date", you may say we're delighted to follow up on our save the date.
- **Guest / Linked To:** If a name is listed, you may say "we'd love you to bring [Name]". Never mention it if the column is empty.
- **No first name (organisation inboxes):** Open with "Dear friends at [Organisation]".
- **Notes:** For your background only. **Never quote or mention anything from the Notes column** (dietary needs, bounced emails, internal reminders, election timing, retirement and so on). The one exception: if a note says the guest lives far away or needs their pack mailed early, gently encourage them to choose delivery for their VIP pack.
- **Skip** anyone with List Status "Need contact" or with no email address. List them at the end so I can follow up.

## Style of each email

Produce each email as **send-ready HTML** that works in Gmail, Outlook and Apple Mail:

- 600px wide, centred, table-based layout, all styles inline, no external CSS, no JavaScript, no web fonts (use Georgia for headings and Arial for body text).
- Icy, elegant palette: deep midnight navy background `#04101F`, a central card in `#0A2646`, ice-blue accents `#7FD3FF`, text in `#EAF4FF`, soft secondary text `#A9C6E4`.
- Structure, top to bottom:
  1. Small spaced-out uppercase label: "A PRIVATE INVITATION"
  2. Large Georgia heading: "You're invited to the VIP Night."
  3. The personalised greeting and opening sentence.
  4. One short paragraph inviting them to the VIP Night for the CentreStage Production of Frozen.
  5. An "invitation card" panel with a thin ice-blue border showing the date, running order, venue and entrance, and dress code in a neat two-column table.
  6. Their personal code displayed large in a monospace style (Courier New), with letter spacing, labelled "YOUR PERSONAL CODE".
  7. A bulletproof button (table cell with background colour, not an image) reading **RSVP NOW**, linking to their personal URL.
  8. One line: "Please reply by Sunday 14 February 2027. Your invitation admits up to two guests."
  9. One line about choosing VIP pack delivery or accepting it on the evening.
  10. Sign-off from Martin Nguyen, Producer, CentreStage, with martin@centrestage.org.au.
  11. Small footer: "CentreStage Production of Frozen · Geelong Arts Centre · This invitation is personal and non-transferable."
- No images, no emoji, no exclamation marks in headings. Use at most one exclamation mark in the whole email.
- The full email body must be under 180 words of visible text.

## Output format

Work through the list **10 guests at a time**. For each guest, give:

1. **To:** their email address
2. **Subject:** personalised, under 60 characters (for example "Jacklyn, your Frozen VIP Night invitation")
3. **Preview text:** under 90 characters
4. **HTML email:** in a single code block
5. **Plain-text version:** the same message, with the personal link written out in full

After every 10, stop and ask whether to continue. At the very end, list everyone you skipped and why.

Double-check that every code and link matches the guest's row exactly. A wrong code locks the guest out.

## VIP list

[Paste your VIP spreadsheet here]
