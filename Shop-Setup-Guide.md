# CentreStage shop: setup guide

The shop is live on the website at /shop. Until Stripe is connected, the cart shows an **Email my order** button that sends the order to david@centrestage.org.au. Once the steps below are done, the same cart sends customers to Stripe's secure checkout.

## How it works

1. Customers pick items, sizes and quantities, and choose **Collect from CentreStage** (free) or **Postage** ($12 flat, Australia only).
2. At checkout, the website sends the cart to a small Google Apps Script (`shop-stripe-checkout.gs.txt`).
3. The script re-checks every item and price against `shop.json` on the live site, so prices can't be altered in the browser. It then creates a Stripe Checkout page.
4. The customer pays by card, Apple Pay or Google Pay. Stripe emails their receipt, and the order appears in your Stripe dashboard with sizes, plaque wording, phone number, delivery choice and (for postage) their address.

## One-off setup (about 20 minutes)

1. **Stripe account.** Sign up or log in at dashboard.stripe.com under CentreStage Pty Ltd, and complete business verification and bank details.
2. **Get your secret key.** In Stripe, go to Developers > API keys. Start with the **test** secret key (`sk_test_...`).
3. **Create the Apps Script.** Go to script.google.com > New project, name it "CentreStage Shop Checkout", and paste in the contents of `shop-stripe-checkout.gs.txt`.
4. **Add the key.** Go to Project Settings > Script Properties > Add property: `STRIPE_SECRET_KEY` = your key. Never paste the key into the website files.
5. **Deploy.** Go to Deploy > New deployment > Web app, set Execute as: **Me** and Who has access: **Anyone**, then copy the `/exec` URL.
6. **Connect the website.** Ask Claude to set `SHOP.endpoint` to that URL, or edit it in `CentreStage.dc.html` and resync index.html, 404.html and frozenvip/index.html.
7. **Test.** Place an order on the live site with Stripe's test card 4242 4242 4242 4242 (any future expiry and any CVC).
8. **Go live.** Swap the Script Property to your **live** key (`sk_live_...`). You don't need to redeploy.

## Recommended Stripe settings

- Settings > Customer emails: turn on **Successful payments** so customers get receipts.
- Settings > Business > Public details: add your ABN and support email, which appear on receipts.
- Your account > Communication preferences: turn on **Successful payments** email notifications so staff hear about each order. Add the shop staff member as a team member if they're fulfilling orders.
- If CentreStage is GST-registered, consider turning on Stripe Tax (or set receipts to show GST-inclusive pricing) so receipts work as tax invoices.

## Changing products, sizes and prices

Everything is in `shop.json`:

- `price` and `was` are in cents (2750 = $27.50). `was` shows a struck-through sale price.
- `sizes` is the list of size buttons. Remove the line for one-size items.
- `options` holds other choices, such as backpack colour.
- `text` holds a free-text field, such as plaque wording. Set `required` to `true` or `false`.
- `"active": false` hides an item without deleting it.
- `"post": false` means the item can't be posted, such as the plaques.
- `postage.amount` is the flat postage fee in cents.

Checkout picks up changes within 5 minutes.

## Before launch, please check

- **Sizes.** The youth and adult size ranges are placeholders based on typical CentreStage sizing. Confirm them against actual stock.
- **T-shirt colours.** These are currently a free-text "Preferred colour" field. Swap it for set colour buttons once you know the range.
- **Plaque wording limits** are 90 characters (150mm) and 45 characters (75mm).
- **Postage** is a flat $12. Adjust it to match Australia Post satchel costs.
- **Product photos** still load from the old Wix site. Upload them to the project's assets folder and update the `img` paths before the Wix plan ends. Four items have no photo yet.
- **Returns policy.** Add your exchange and refund terms (under Australian Consumer Law) to the Policies page and link it from the shop.
