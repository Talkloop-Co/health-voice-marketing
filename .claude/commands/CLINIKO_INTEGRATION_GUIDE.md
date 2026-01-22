# How to Connect Your Cliniko Account to HealthVoice

_This guide will walk you through connecting your Cliniko practice management system to HealthVoice in just a few minutes._

---

## What You'll Need

Before you begin, make sure you have:

- ✓ An active Cliniko account with admin access
- ✓ A HealthVoice account with organisation admin permissions
- ✓ 5-10 minutes to complete the setup

---

## Step 1: Generate Your Cliniko API Key

First, you'll need to create an API key in your Cliniko account. This secure key allows HealthVoice to access your practice information.

1. **Log into your Cliniko account**
2. **Click your name** in the bottom left corner of the screen
3. **Select "My info"** from the menu
4. **Enable API access:**
   - Find the option "Allow yourself to create and use API keys"
   - Toggle this setting **ON**
   - Click "Update user" to save your changes
5. **Create a new API key:**
   - Click **"Manage API keys"**
   - Click **"Add an API Key"**
   - Give it a memorable name like "HealthVoice Integration"
   - Click **"Create"**
6. **Copy your API key** immediately (you won't be able to see it again!)
   - Store it somewhere safe temporarily - you'll need it in the next step

> **Security Note:** Your API key is like a password - keep it confidential and never share it publicly.

---

## Step 2: Connect Cliniko to HealthVoice

Now you'll connect your Cliniko account to HealthVoice:

1. **Log into your HealthVoice dashboard**
2. **Navigate to Organisation Settings**
   - Click your organisation name in the navigation
   - Select **"Settings"**
3. **Go to the Cliniko tab**
4. **Enter your API key:**
   - Paste the API key you copied from Cliniko
   - Click **"Next"**
5. **Wait for validation:**
   - HealthVoice will test the connection to your Cliniko account
   - This usually takes just a few seconds
   - You'll see a success message when the connection is established

---

## Step 3: Select Your Business Location

If your Cliniko account has multiple business locations:

1. **Choose your primary location** from the dropdown menu
2. The system will **automatically save** your selection
3. You'll see a confirmation message

> **Note:** This business location will be used as the default for your voice agents. You can change this later if needed.

---

## Step 4: Enable Online Bookings in Cliniko

This is a critical step - your voice agents need online bookings to be enabled:

1. **Log back into Cliniko**
2. **Go to Settings → Online Bookings**
3. **Enable online bookings** for your business
4. **Configure your booking preferences:**
   - Set which appointment types are available
   - Configure which practitioners can receive bookings
   - Set your availability windows

> **Important:** Without online bookings enabled, your voice agents won't be able to create appointments for patients.

For detailed instructions, see [Cliniko's Online Bookings Guide](https://help.cliniko.com/en/articles/2586436-online-bookings-guide).

---

## Step 5: Verify Your Integration

Test that everything is working correctly:

1. **Return to your HealthVoice dashboard**
2. **Go to Voice Agents → Setup** or **Integration Status**
3. **Check that Cliniko shows as "Connected"**
4. Look for a green checkmark or success indicator

---

## What Happens Next?

Once connected, HealthVoice can access your Cliniko data to:

- ✓ Search for existing patients
- ✓ Register new patients
- ✓ Check real-time practitioner availability
- ✓ Book, modify, and cancel appointments
- ✓ Access appointment types and services
- ✓ View medical alerts for patient safety
- ✓ Retrieve business information

All interactions are secure and comply with healthcare privacy standards.

---

## Troubleshooting

**"Invalid API key" error:**

- Double-check you copied the entire API key (no extra spaces)
- Verify the API key hasn't been deleted in Cliniko
- Make sure you enabled "Allow yourself to create and use API keys" in Cliniko

**"Connection failed - forbidden" error:**

- Your API key may not have sufficient permissions
- Try creating a new API key with full permissions

**"No businesses found" error:**

- Verify your Cliniko account has at least one business location set up
- Check that the API key has permission to access business information

**Connection times out:**

- Check your internet connection
- Try again in a few minutes (Cliniko may be experiencing temporary issues)
- Contact support if the problem persists

---

## Need Help?

If you encounter any issues during setup:

- 📧 **Email:** support@talkloop.com.au

Our support team typically responds within 24 hours during business hours.

---

## Next Steps

Now that your Cliniko account is connected:

1. **Create your first voice agent** - Set up your AI receptionist
2. **Configure your phone number** - Get a dedicated number for patient calls
3. **Customise your knowledge base** - Train your agent on your practice information
4. **Test your integration** - Make a test call to verify everything works

---

## Video Walkthrough

_[Consider adding a short 3-5 minute video here showing the entire process]_

---

## Security & Privacy

Your Cliniko connection is secure:

- All data transfers use encrypted HTTPS connections
- API keys are stored securely and never exposed in logs
- HealthVoice complies with healthcare privacy standards
- Patient data remains in your Cliniko account
- You can revoke access at any time by deleting your API key in Cliniko

---

## Frequently Asked Questions

**Q: Can I use multiple Cliniko accounts?**
A: Each HealthVoice organisation connects to one Cliniko account. If you have multiple practices, create separate organisations in HealthVoice.

**Q: Will this affect my existing Cliniko setup?**
A: No - HealthVoice only reads and writes appointment data. Your existing Cliniko configuration, settings, and workflows remain unchanged.

**Q: What Cliniko plan do I need?**
A: HealthVoice works with all Cliniko plans that support API access and online bookings.

**Q: Can I disconnect Cliniko later?**
A: Yes - simply remove your API key from HealthVoice settings or delete the API key in Cliniko.

**Q: Does this cost extra in Cliniko?**
A: No - Cliniko API access is included in your Cliniko subscription at no additional cost.

---

## Recommendations for Publishing

When publishing this guide on your marketing site, consider adding:

1. **Screenshots** at each major step showing:

   - Where to find "My info" in Cliniko

   1. https://res.cloudinary.com/nhobes/image/upload/v1768957026/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_1_aqwehh.png
   2. https://res.cloudinary.com/nhobes/image/upload/v1768957032/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_2_smdnq6.png
   3. https://res.cloudinary.com/nhobes/image/upload/v1768957026/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_3_knxp5y.png

   - The API key creation screen

   4. https://res.cloudinary.com/nhobes/image/upload/v1768957029/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_4_qxtnlt.png
   5. https://res.cloudinary.com/nhobes/image/upload/v1768957029/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_5_dqfw2s.png
   6. https://res.cloudinary.com/nhobes/image/upload/v1769038474/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_6_hldrfu.png

   - Entering the Cliniko API Key in HealthVoice
     Onboarding:

   7. https://res.cloudinary.com/nhobes/image/upload/v1768957041/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_7_f4z3xp.png
   8. https://res.cloudinary.com/nhobes/image/upload/v1768957040/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_8_z8cy0p.png

   - The business location selection dropdown

   9. https://res.cloudinary.com/nhobes/image/upload/v1768957041/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_9_d1n77x.png

   - OR Settings page

   10. https://res.cloudinary.com/nhobes/image/upload/v1768957032/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_10_uzths8.png
   11. https://res.cloudinary.com/nhobes/image/upload/v1768957026/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_11_ybjr8q.png

2. **Create a companion video** (3-5 minutes) showing the entire process

3. **Visual indicators:**

   - Use checkmarks for completed steps
   - Add estimated time (e.g., "Step 1 • 2 minutes")
   - Include warning/info boxes for critical information

4. **Consider a progress indicator:**

   - Show users where they are in the setup process
   - "Step 2 of 5" format

5. **Add a printable checklist version** for users who want a quick reference

6. **Include success metrics:**
   - "Most users complete this in under 10 minutes"
   - "Join 500+ clinics already using this integration"

---

**Last updated:** January 2026
**Integration version:** 1.0
