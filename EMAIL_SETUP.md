# Email Setup Guide

To make your contact form work, you need to set up email configuration. Follow these steps:

## 1. Create Environment Variables

Create a file called `.env.local` in your project root with the following content:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

## 2. Gmail Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. In Google Account > Security > 2-Step Verification
2. Scroll down to "App passwords"
3. Click "App passwords"
4. Select "Mail" and "Other (custom name)"
5. Enter "Auto Agent X Contact Form" as the name
6. Copy the generated 16-character password

### Step 3: Update Environment Variables
Replace the values in your `.env.local` file:
- `EMAIL_USER`: Your Gmail address (e.g., `ahmed@autoagentx.com`)
- `EMAIL_PASS`: The 16-character app password from step 2

## 3. Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email for the notification

## Features

✅ **Professional Email Templates**: Both you and the user receive beautifully formatted emails
✅ **Auto-Reply**: Users get a confirmation email with next steps
✅ **Direct Reply**: You can reply directly to the user's email
✅ **Error Handling**: Graceful error handling with user-friendly messages
✅ **Security**: Uses Gmail's secure SMTP with app passwords

## Troubleshooting

- **"Invalid login"**: Check your app password is correct
- **"Less secure app"**: Make sure you're using an app password, not your regular password
- **No emails received**: Check spam folder and verify environment variables are loaded

## Alternative Email Services

If you prefer not to use Gmail, you can modify the transporter in `/src/app/api/contact/route.ts` to use:
- SendGrid
- Mailgun
- AWS SES
- Any other SMTP service
