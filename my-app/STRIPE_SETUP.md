# Stripe Integration Setup Guide

Your Stripe payment integration is now installed! Follow these steps to complete the setup:

## ✅ What's Already Done

- ✅ Stripe packages installed
- ✅ API route created (`/api/create-checkout`)
- ✅ Success page created (`/success`)
- ✅ Modal updated with pricing and payment flow
- ✅ Environment variables file created

## 🔧 What You Need to Do

### Step 1: Get Your Stripe API Keys

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register) and create a Stripe account (if you don't have one)
2. After signing in, go to [https://dashboard.stripe.com/test/apikeys](https://dashboard.stripe.com/test/apikeys)
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`) - Click "Reveal test key"

### Step 2: Add Keys to Environment File

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_SECRET_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Restart Your Dev Server

After adding the keys, restart your development server:

```bash
# Stop the current server (Ctrl+C or Cmd+C)
# Then run:
npm run dev
```

## 🧪 Testing the Integration

### Using Stripe Test Cards

Stripe provides test card numbers for testing payments:

**Successful Payment:**
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., `12/34`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

**Failed Payment:**
- Card: `4000 0000 0000 0002`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

### Test Flow

1. Click "Join Waitlist" or "Get Early Access"
2. Fill in the form with test data
3. Click "Continue to Payment →"
4. You'll be redirected to Stripe's checkout page
5. Use a test card number above
6. Complete the payment
7. You'll be redirected back to your success page!

## 💰 Current Pricing

The integration is currently set to **$99 one-time payment**.

To change the price, edit `app/api/create-checkout/route.ts`:

```typescript
unit_amount: 9900, // Change this (amount in cents)
// Examples:
// $49.00 = 4900
// $149.00 = 14900
// $9.99 = 999
```

## 📊 Viewing Payments in Stripe

1. Go to [https://dashboard.stripe.com/test/payments](https://dashboard.stripe.com/test/payments)
2. You'll see all test payments here
3. Click on any payment to see customer details (name, email, company)

## 🚀 Going Live (Production)

When you're ready to accept real payments:

1. Complete Stripe account verification
2. Switch to **Live mode** in Stripe dashboard
3. Get your **Live API keys** from [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
4. Update `.env.local` with live keys (or better: use production environment variables)
5. Update `NEXT_PUBLIC_SITE_URL` to your actual domain

## 🎨 Customization Options

### Change Product Name/Description

Edit `app/api/create-checkout/route.ts`:

```typescript
product_data: {
  name: 'Your Product Name',
  description: 'Your product description',
},
```

### Add Webhooks (Advanced)

To get notified when payments succeed and automate actions:

1. Create webhook endpoint: `app/api/webhooks/stripe/route.ts`
2. Listen for `checkout.session.completed` event
3. Automate: Send welcome emails, grant access, etc.

## 🆘 Troubleshooting

**Error: "Stripe API key not found"**
- Make sure you've added keys to `.env.local`
- Restart your dev server after adding keys

**Payment not working**
- Check browser console for errors
- Verify you're using test card numbers correctly
- Check Stripe dashboard logs

**Success page not loading**
- Verify `NEXT_PUBLIC_SITE_URL` matches your actual URL
- Check that `/success` page exists

## 📧 Support

Need help? Check:
- [Stripe Documentation](https://stripe.com/docs)
- [Next.js + Stripe Guide](https://stripe.com/docs/payments/checkout/how-checkout-works)
