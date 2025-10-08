# 🚀 Firebase + Stripe Payments Setup

Follow these steps to set up **Firebase** with **Stripe payments** using `invertase/firestore-stripe-payments@0.3.9`.

---

## 1️⃣ Create a Firebase Project & Enable Google Authentication

1. **Go to** [Firebase Console](https://console.firebase.google.com/).
2. **Create a new project** and **add a web app**.
3. **Enable Google Authentication**:
   - Navigate to `Build > Authentication > Sign-in Method`.
   - Enable **Google** as a sign-in provider.
4. **Set Firestore Security Rules** (Copy & Paste the rules below):

```ts
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow EVERYONE to read AND write ALL documents in Firestore
    match /{document=**} {
      allow read, write: if true;
    }

    // Stripe-specific security (DO NOT CHANGE)
    match /customers/{uid} {
      allow read: if request.auth.uid == uid;

      match /checkout_sessions/{id} {
        allow read, write: if request.auth.uid == uid;
      }
      match /subscriptions/{id} {
        allow read: if request.auth.uid == uid;
      }
      match /payments/{id} {
        allow read: if request.auth.uid == uid;
      }
    }

    match /products/{id} {
      allow read: if true;
      match /prices/{id} { allow read: if true; }
      match /tax_rates/{id} { allow read: if true; }
    }
  }
}
```

---

## 2️⃣ Install `firestore-stripe-payments`

Run the following command to install the Stripe extension:

```sh
firebase ext:install invertase/firestore-stripe-payments@0.3.9
```

### 🔹 **During Installation:**
- **Cloud Functions Location** → `us-central1 (Iowa)` (default)
- **Stripe API Key** → Use a **restricted key** with:
  - **Write access**: `Customers`, `Checkout Sessions`, `Customer Portal`
  - **Read access**: `Subscriptions`, `Prices`
- **Leave Webhook URL empty for now** (to be set later).

---

## 3️⃣ Configure Stripe Webhooks

1. **Go to** [Stripe Webhooks](https://dashboard.stripe.com/webhooks).
2. **Create a new webhook** and add the endpoint provided by `firestore-stripe-payments`.
3. **Enable the following events:**

✅ **Required Events:**
- `product.created`, `product.updated`, `product.deleted`
- `price.created`, `price.updated`, `price.deleted`
- `checkout.session.completed`
- `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
- `payment_intent.processing`, `payment_intent.succeeded`, `payment_intent.canceled`, `payment_intent.payment_failed`

🔹 **Optional Events (for invoices & tax rates):**
- `tax_rate.created`, `tax_rate.updated`
- `invoice.paid`, `invoice.payment_succeeded`, `invoice.payment_failed`
- `invoice.upcoming`, `invoice.marked_uncollectible`, `invoice.payment_action_required`

4. **Copy the Signing Secret** provided by Stripe.
5. **Paste it into the** `Stripe webhook secret` **field in Firebase**.

---

## 4️⃣ Create a Product in Stripe

1. **Go to** [Stripe Dashboard](https://dashboard.stripe.com/products).
2. **Create a new product** and set a price.
3. **Copy the Price ID** (you'll need it for checkout).

---

## ✅ You're All Set!

Use the **prewritten functions and components** to integrate Stripe into your app! 🎉

---

## 🔗 Useful Links
- [Firebase Console](https://console.firebase.google.com/)
- [Stripe Dashboard](https://dashboard.stripe.com/)
- [Firestore Stripe Payments Docs](https://github.com/invertase/firestore-stripe-payments)

