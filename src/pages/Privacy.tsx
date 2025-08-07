import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

          <p className="text-center text-muted-foreground mb-8">
            <strong>Effective Date: 7 August 2025</strong>
          </p>

          <p className="mb-6">
            This Privacy Policy describes how HealthVoice ("HealthVoice", "we", "our", or "us"), operated by Everfree Pty Ltd (ABN 54 636 064 296), collects, uses, discloses, and protects your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>

          <p className="mb-8">
            We are committed to protecting your privacy and ensuring that your personal information is handled responsibly.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who We Are</h2>
          <p className="mb-4">
            HealthVoice is a Voice AI platform tailored for healthcare providers in Australia. We offer intelligent phone reception services that handle patient inquiries, bookings, cancellations, and other clinic-related interactions via voice technology. Our services are provided by Everfree Pty Ltd.
          </p>
          <p className="mb-6">
            <strong>Contact details:</strong><br />
            Email: hello@healthvoice.com.au
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect the following types of personal information:</p>

          <h3 className="text-xl font-medium mt-6 mb-3">a. Information you provide directly:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Clinic or practice information</li>
            <li>Payment details (handled via Stripe)</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">b. Automatically collected information:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Audio recordings and transcriptions of calls (via ElevenLabs)</li>
            <li>Call metadata (e.g., time, duration, caller ID via Twilio)</li>
            <li>Usage data such as browser type, IP address, pages visited, and session duration</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">c. Sensitive information:</h3>
          <p className="mb-4">
            In some cases, information disclosed during voice calls may be considered sensitive (e.g. health-related details)
          </p>
          <p className="mb-6">
            We only collect sensitive information with your consent or where required/permitted by law.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for purposes such as:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delivering our voice assistant services</li>
            <li>Processing payments (via Stripe)</li>
            <li>Troubleshooting, support and service improvement</li>
            <li>Ensuring security and preventing fraud</li>
            <li>Complying with legal and regulatory obligations</li>
            <li>De-identifying and aggregating data for analytics</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Share Your Information</h2>
          <p className="mb-4">We may disclose your personal information to:</p>

          <div className="mb-4">
            <strong>Service Providers:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>ElevenLabs</strong> (voice transcription and AI voice synthesis)</li>
              <li><strong>Twilio</strong> (telephony and call routing services)</li>
              <li><strong>Stripe</strong> (payment processing)</li>
            </ul>
          </div>

          <ul className="list-disc pl-6 mb-4">
            <li>Our employees, contractors, and professional advisers (on a need-to-know basis)</li>
            <li>Law enforcement or government agencies where required by law</li>
            <li>Other third parties with your consent or as permitted under the Privacy Act</li>
          </ul>

          <p className="mb-6">
            <strong>Overseas disclosure:</strong> Some of our providers (e.g., ElevenLabs, Stripe, Twilio) may store or process your data overseas. We take reasonable steps to ensure these providers handle data in compliance with the APPs.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Quality & Security</h2>
          <p className="mb-4">We take reasonable steps to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure your personal information is accurate, complete, and up to date</li>
            <li>Protect your information from misuse, interference, loss, unauthorised access, modification, or disclosure</li>
          </ul>

          <p className="mb-4">Security measures include:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Encrypted data storage and transmission</li>
            <li>Role-based access controls</li>
            <li>Secure data centres and audit logs</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Audio recordings and transcripts are stored based on configurable settings.</li>
            <li>Some data may be retained for longer periods where required for compliance or legal obligations.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Access & Correction</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Request access to personal information we hold about you</li>
            <li>Request correction if the information is inaccurate, incomplete, or outdated</li>
          </ul>
          <p className="mb-6">
            To exercise these rights, please contact us at hello@healthvoice.com.au. We will respond within a reasonable timeframe (typically within 30 days).
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights & Choices</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>You may choose to remain anonymous or use a pseudonym, although this may limit our ability to provide services.</li>
            <li>You may opt out of marketing communications at any time.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p className="mb-6">
            HealthVoice services are not directed at children under 16. We do not knowingly collect personal information from children without parental consent.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The most current version will be published on our website. Material changes will be notified via email or prominent notice.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Complaints</h2>
          <p className="mb-4">
            If you have concerns about how we handle your personal information, please contact us at hello@healthvoice.com.au. We will investigate and respond to your complaint promptly.
          </p>
          <p className="mb-6">
            If you are not satisfied with our response, you may contact the <strong>Office of the Australian Information Commissioner (OAIC)</strong>:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Website: www.oaic.gov.au</li>
            <li>Phone: 1300 363 992</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or requests relating to this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="mb-6">
            <strong>Everfree Pty Ltd</strong><br />
            Email: hello@healthvoice.com.au
          </p>

          <hr className="my-8" />

          <p className="text-center text-muted-foreground mt-8">
            Thank you for trusting HealthVoice with your information.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
