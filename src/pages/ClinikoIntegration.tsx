import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

const ClinikoIntegration = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">How to Connect Your Cliniko Account to HealthVoice</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This guide will walk you through connecting your Cliniko practice management system to HealthVoice in just a few minutes.
          </p>
        </div>

        {/* What You'll Need */}
        <Card className="mb-12 border-trust-blue/20 bg-trust-blue/5">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What You'll Need</h2>
            <p className="mb-4 text-muted-foreground">Before you begin, make sure you have:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
                <span>An active Cliniko account with admin access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
                <span>A HealthVoice account with organisation admin permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
                <span>5-10 minutes to complete the setup</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="text-lg px-4 py-1 bg-trust-blue">Step 1</Badge>
            <h2 className="text-3xl font-bold">Generate Your Cliniko API Key</h2>
          </div>

          <p className="text-lg mb-6 text-muted-foreground">
            First, you'll need to create an API key in your Cliniko account. This secure key allows HealthVoice to access your practice information.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">1</span>
              <p><strong>Log into your Cliniko account</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">2</span>
              <p><strong>Click your name</strong> in the bottom left corner of the screen</p>
            </div>
          </div>

          <div className="my-8 rounded-lg overflow-hidden border border-border shadow-lg">
            <img
              src="https://res.cloudinary.com/nhobes/image/upload/v1768957026/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_1_aqwehh.png"
              alt="Click your name in Cliniko"
              className="w-full"
            />
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">3</span>
              <p><strong>Select "My info"</strong> from the menu</p>
            </div>
          </div>

          <div className="my-8 rounded-lg overflow-hidden border border-border shadow-lg">
            <img
              src="https://res.cloudinary.com/nhobes/image/upload/v1768957032/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_2_smdnq6.png"
              alt="Select My Info"
              className="w-full"
            />
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">4</span>
              <div>
                <p className="mb-2"><strong>Enable API access:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Find the option "Allow yourself to create and use API keys"</li>
                  <li>Toggle this setting <strong>ON</strong></li>
                  <li>Click "Update user" to save your changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-8 rounded-lg overflow-hidden border border-border shadow-lg">
            <img
              src="https://res.cloudinary.com/nhobes/image/upload/v1768957026/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_3_knxp5y.png"
              alt="Enable API access"
              className="w-full"
            />
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">5</span>
              <div>
                <p className="mb-2"><strong>Create a new API key:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Click <strong>"Manage API keys"</strong></li>
                  <li>Click <strong>"Add an API Key"</strong></li>
                  <li>Give it a memorable name like "HealthVoice Integration"</li>
                  <li>Click <strong>"Create"</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="rounded-lg overflow-hidden border border-border shadow-lg">
              <img
                src="https://res.cloudinary.com/nhobes/image/upload/v1768957029/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_4_qxtnlt.png"
                alt="Manage API keys"
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-lg">
              <img
                src="https://res.cloudinary.com/nhobes/image/upload/v1768957029/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_5_dqfw2s.png"
                alt="Add an API Key"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">6</span>
              <div>
                <p className="mb-2"><strong>Copy your API key</strong> immediately (you won't be able to see it again!)</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Store it somewhere safe temporarily - you'll need it in the next step</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-8 rounded-lg overflow-hidden border border-border shadow-lg">
            <img
              src="https://res.cloudinary.com/nhobes/image/upload/v1769038474/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_6_hldrfu.png"
              alt="Copy your API key"
              className="w-full"
            />
          </div>

          <Alert className="border-amber-500/50 bg-amber-500/10">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription>
              <strong>Security Note:</strong> Your API key is like a password - keep it confidential and never share it publicly.
            </AlertDescription>
          </Alert>
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="text-lg px-4 py-1 bg-trust-blue">Step 2</Badge>
            <h2 className="text-3xl font-bold">Connect Cliniko to HealthVoice</h2>
          </div>

          <p className="text-lg mb-6 text-muted-foreground">
            Now you'll connect your Cliniko account to HealthVoice:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">1</span>
              <p><strong>Log into your HealthVoice dashboard</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">2</span>
              <div>
                <p className="mb-2"><strong>Navigate to Organisation Settings</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Click your organisation name in the navigation</li>
                  <li>Select <strong>"Settings"</strong></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">3</span>
              <p><strong>Go to the Cliniko tab</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">4</span>
              <div>
                <p className="mb-2"><strong>Enter your API key:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Paste the API key you copied from Cliniko</li>
                  <li>Click <strong>"Next"</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="rounded-lg overflow-hidden border border-border shadow-lg">
              <img
                src="https://res.cloudinary.com/nhobes/image/upload/v1768957041/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_7_f4z3xp.png"
                alt="HealthVoice onboarding"
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-lg">
              <img
                src="https://res.cloudinary.com/nhobes/image/upload/v1768957040/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_8_z8cy0p.png"
                alt="Enter Cliniko API key"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">5</span>
              <div>
                <p className="mb-2"><strong>Wait for validation:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>HealthVoice will test the connection to your Cliniko account</li>
                  <li>This usually takes just a few seconds</li>
                  <li>You'll see a success message when the connection is established</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="text-lg px-4 py-1 bg-trust-blue">Step 3</Badge>
            <h2 className="text-3xl font-bold">Select Your Business Location</h2>
          </div>

          <p className="text-lg mb-6 text-muted-foreground">
            If your Cliniko account has multiple business locations:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">1</span>
              <p><strong>Choose your primary location</strong> from the dropdown menu</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">2</span>
              <p>The system will <strong>automatically save</strong> your selection</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">3</span>
              <p>You'll see a confirmation message</p>
            </div>
          </div>

          <div className="my-8 rounded-lg overflow-hidden border border-border shadow-lg">
            <img
              src="https://res.cloudinary.com/nhobes/image/upload/v1768957041/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_9_d1n77x.png"
              alt="Select business location"
              className="w-full"
            />
          </div>

          <Alert className="border-blue-500/50 bg-blue-500/10">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription>
              <strong>Note:</strong> This business location will be used as the default for your voice agents. You can change this later if needed.
            </AlertDescription>
          </Alert>

          <div className="mt-8">
            <p className="text-lg mb-4 text-muted-foreground">
              You can also configure this later in your Organisation Settings:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="https://res.cloudinary.com/nhobes/image/upload/v1768957032/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_10_uzths8.png"
                  alt="Organisation settings"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="https://res.cloudinary.com/nhobes/image/upload/v1768957026/HealthVoice/healthvoice_integration_steps/healthvoice_integration_step_11_ybjr8q.png"
                  alt="Cliniko settings tab"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="text-lg px-4 py-1 bg-trust-blue">Step 4</Badge>
            <h2 className="text-3xl font-bold">Enable Online Bookings in Cliniko</h2>
          </div>

          <p className="text-lg mb-6 text-muted-foreground">
            This is a critical step - your voice agents need online bookings to be enabled:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">1</span>
              <p><strong>Log back into Cliniko</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">2</span>
              <p><strong>Go to Settings → Online Bookings</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">3</span>
              <p><strong>Enable online bookings</strong> for your business</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">4</span>
              <div>
                <p className="mb-2"><strong>Configure your booking preferences:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Set which appointment types are available</li>
                  <li>Configure which practitioners can receive bookings</li>
                  <li>Set your availability windows</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="border-red-500/50 bg-red-500/10 mb-6">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription>
              <strong>Important:</strong> Without online bookings enabled, your voice agents won't be able to create appointments for patients.
            </AlertDescription>
          </Alert>

          <p className="text-muted-foreground">
            For detailed instructions, see{" "}
            <a
              href="https://help.cliniko.com/en/articles/2586436-online-bookings-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-trust-blue hover:underline"
            >
              Cliniko's Online Bookings Guide
            </a>.
          </p>
        </div>

        {/* Step 5 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="text-lg px-4 py-1 bg-trust-blue">Step 5</Badge>
            <h2 className="text-3xl font-bold">Verify Your Integration</h2>
          </div>

          <p className="text-lg mb-6 text-muted-foreground">
            Test that everything is working correctly:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">1</span>
              <p><strong>Return to your HealthVoice dashboard</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">2</span>
              <p><strong>Go to Voice Agents → Setup</strong> or <strong>Integration Status</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">3</span>
              <p><strong>Check that Cliniko shows as "Connected"</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center font-semibold">4</span>
              <p>Look for a green checkmark or success indicator</p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <Card className="mb-12 border-green-500/20 bg-green-500/5">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
            <p className="mb-4 text-muted-foreground">Once connected, HealthVoice can access your Cliniko data to:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Search for existing patients</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Register new patients</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Check real-time practitioner availability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Book, modify, and cancel appointments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Access appointment types and services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>View medical alerts for patient safety</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Retrieve business information</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground italic">
              All interactions are secure and comply with healthcare privacy standards.
            </p>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">"Invalid API key" error:</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Double-check you copied the entire API key (no extra spaces)</li>
                <li>Verify the API key hasn't been deleted in Cliniko</li>
                <li>Make sure you enabled "Allow yourself to create and use API keys" in Cliniko</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">"Connection failed - forbidden" error:</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Your API key may not have sufficient permissions</li>
                <li>Try creating a new API key with full permissions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">"No businesses found" error:</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Verify your Cliniko account has at least one business location set up</li>
                <li>Check that the API key has permission to access business information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Connection times out:</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Check your internet connection</li>
                <li>Try again in a few minutes (Cliniko may be experiencing temporary issues)</li>
                <li>Contact support if the problem persists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <Card className="mb-12 border-trust-blue/20">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              If you encounter any issues during setup:
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@talkloop.com.au" className="text-trust-blue hover:underline">
                support@talkloop.com.au
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Our support team typically responds within 24 hours during business hours.
            </p>
          </CardContent>
        </Card>

        {/* Security & Privacy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Security & Privacy</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Your Cliniko connection is secure:
          </p>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
              <span>All data transfers use encrypted HTTPS connections</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
              <span>API keys are stored securely and never exposed in logs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
              <span>HealthVoice complies with healthcare privacy standards</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
              <span>Patient data remains in your Cliniko account</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
              <span>You can revoke access at any time by deleting your API key in Cliniko</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I use multiple Cliniko accounts?</h3>
              <p className="text-muted-foreground">
                Each HealthVoice organisation connects to one Cliniko account. If you have multiple practices, create separate organisations in HealthVoice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Will this affect my existing Cliniko setup?</h3>
              <p className="text-muted-foreground">
                No - HealthVoice only reads and writes appointment data. Your existing Cliniko configuration, settings, and workflows remain unchanged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What Cliniko plan do I need?</h3>
              <p className="text-muted-foreground">
                HealthVoice works with all Cliniko plans that support API access and online bookings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Can I disconnect Cliniko later?</h3>
              <p className="text-muted-foreground">
                Yes - simply remove your API key from HealthVoice settings or delete the API key in Cliniko.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Does this cost extra in Cliniko?</h3>
              <p className="text-muted-foreground">
                No - Cliniko API access is included in your Cliniko subscription at no additional cost.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-sm text-muted-foreground border-t pt-8">
          <p>Last updated: January 2026</p>
          <p>Integration version: 1.0</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClinikoIntegration;
