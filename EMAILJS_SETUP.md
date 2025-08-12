# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails automatically from your contact form without requiring users to open their email client.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (prosserbasketball8@gmail.com)
5. Note down your **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**

```
New Contact from {{from_name}} - {{from_email}} - {{from_phone}}
```

**Body:**

```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}

---
This email was sent from your Prosser Basketball website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Your Website

Replace the placeholder values in `script.js`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your actual service ID
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

## Step 6: Test the Form

1. Open your website
2. Fill out the contact form
3. Submit the form
4. Check your email (prosserbasketball8@gmail.com) for the test message

## Benefits of This Setup

✅ **No Email Client Required** - Emails send automatically from the browser
✅ **Professional Experience** - Users get immediate confirmation
✅ **No Server Required** - Everything runs through EmailJS
✅ **Spam Protection** - Built-in rate limiting and validation
✅ **Mobile Friendly** - Works on all devices without email apps

## Free Plan Limits

- 200 emails per month
- Perfect for a small business website
- Upgrade plans available if you need more

## Troubleshooting

- **Emails not sending**: Check your browser console for errors
- **Service ID issues**: Verify your email service is properly connected
- **Template errors**: Ensure your template variables match the code

## Support

If you need help setting up EmailJS, their support team is very helpful and responsive.
