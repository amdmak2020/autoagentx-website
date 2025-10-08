# Web3Forms Setup Guide (5 Minutes!)

Web3Forms is a simple, free email service that requires NO server configuration. Perfect for contact forms!

## Quick Setup (3 Steps)

### Step 1: Get Your Free Access Key
1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `Ahmed@AutoAgentx.com`
3. Click "Get Access Key"
4. Check your email and copy the access key

### Step 2: Add Access Key to Your Project
Create a file called `.env.local` in your project root:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

Replace `your-access-key-here` with the key from your email.

### Step 3: Restart Your Dev Server
```bash
npm run dev
```

That's it! Your contact form will now send emails to `Ahmed@AutoAgentx.com`

## Features ✨

- ✅ **No SMTP Setup Required** - Works immediately
- ✅ **Free Forever** - Up to 250 submissions/month
- ✅ **No Credit Card** - Completely free to start
- ✅ **Spam Protection** - Built-in spam filtering
- ✅ **Email Notifications** - Instant email delivery
- ✅ **Easy to Use** - Just one API key needed

## Testing

1. Start your server: `npm run dev`
2. Go to your contact page: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check `Ahmed@AutoAgentx.com` for the email!

## Troubleshooting

**Not receiving emails?**
- Check your spam folder
- Verify the access key in `.env.local` is correct
- Make sure you restarted the dev server after adding `.env.local`
- Check the browser console and terminal for error messages

**Want to test without the key?**
The form will still work but emails won't send until you add the access key.

## Alternative: Use Gmail (More Complex)

If you prefer Gmail, see `EMAIL_SETUP.md` for instructions on setting up Gmail SMTP with Nodemailer.
