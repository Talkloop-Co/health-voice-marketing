import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Use</h1>
          
          <p className="text-center text-muted-foreground mb-8">
            <strong>Effective Date: 7 August 2025</strong>
          </p>

          <p className="mb-8">
            These Terms of Use ("Terms") apply to your access to and use of the HealthVoice platform ("Service") provided by Everfree Pty Ltd (ABN 54 636 064 296) ("we", "us", or "our"). By accessing or using the Service, you agree to be bound by these Terms, including our Privacy Policy. If you do not agree to these Terms, you must not use our Service.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Overview</h2>
          <p className="mb-6">
            HealthVoice is a Voice AI service tailored to Australian healthcare providers. It automates patient interactions through intelligent telephony integrations. Our technology stack includes ElevenLabs (voice), Twilio (telephony), Stripe (payments), and our proprietary platform (Petal).
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility & Account</h2>
          <p className="mb-6">
            You must be at least 18 years old and legally capable of entering into contracts to use our Service. You agree to provide accurate, complete, and current information when creating an account, and to maintain the security of your login credentials.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of the Service</h2>
          <p className="mb-4">You may only use the Service for lawful purposes. You must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Not use the Service to violate any law, regulation, or third-party rights.</li>
            <li>Obtain proper consent from callers if recording is enabled.</li>
            <li>Not interfere with or disrupt the integrity of the platform.</li>
          </ul>
          <p className="mb-6">
            We reserve the right to suspend or terminate your access if you breach these Terms.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. AI Outputs & Disclaimers</h2>
          <p className="mb-4">
            HealthVoice includes AI-generated content, including synthesized speech and transcriptions. You acknowledge and accept that:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>AI outputs may be inaccurate or incomplete.</li>
            <li>You are solely responsible for verifying the accuracy and appropriateness of AI responses.</li>
            <li>HealthVoice is not a substitute for professional medical, legal, or administrative advice.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Fees, Billing & Refunds</h2>
          <p className="mb-4">
            We offer a 14-day free trial to new customers. After the trial period, you will be billed on a monthly basis according to the plan selected, which may include call credits or usage-based fees. All charges are processed through Stripe.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Billing terms:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Charges begin automatically after the trial ends unless cancelled.</li>
            <li>You are responsible for managing your subscription, including upgrades or cancellations.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Refund Policy:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>We do not offer refunds after the 14-day free trial period.</li>
            <li>By continuing to use the Service past the trial, you agree to be billed in accordance with your selected plan.</li>
            <li>We do not offer pro-rata refunds or credits for unused services, mid-cycle cancellations, or renewals.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Dispute Resolution</h2>
          <p className="mb-4">
            If you have a concern, please contact us at hello@healthvoice.com.au. We will attempt to resolve disputes in good faith. If unresolved, disputes are subject to the exclusive jurisdiction of the courts of Victoria, Australia.
          </p>
          <p className="mb-6">
            We may, but are not obliged to, offer informal dispute resolution mechanisms or arbitration.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p className="mb-4">
            This Agreement shall be governed and construed in accordance with the laws of the State of Victoria, Australia. Your use of our Service and this contract are governed by the laws of Victoria. You irrevocably and unconditionally submit to the exclusive jurisdiction of the courts operating in Victoria and any courts entitled to hear appeals from those courts and waive any right to object to proceedings being brought in those courts.
          </p>
          <p className="mb-6">
            Our Service may be accessed throughout Australia and overseas. We make no representation that our Service complies with the laws (including intellectual property laws) of any country outside Australia. If you access our Service from outside Australia, you do so at your own risk and are responsible for complying with the laws of the jurisdiction where you access our Service or Products.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Warranties, Disclaimers and Indemnity</h2>
          <p className="mb-4">
            To the extent permitted by law, we make no representations or warranties about our Service or Products including (without limitation) that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>access will be uninterrupted, error-free and free from viruses;</li>
          </ul>

          <p className="mb-4">
            <strong>Limitation of liability:</strong> Despite anything to the contrary, to the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>our maximum aggregate Liability arising from or in connection with this contract (including the services we provide and/or the subject matter of this contract) will be limited to $100; and</li>
            <li>we will not be liable to you for any loss of profit (including anticipated profit), loss of benefit (including anticipated benefit), loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings (including anticipated savings), loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity or otherwise.</li>
          </ul>

          <p className="mb-4">
            Despite anything to the contrary, to the maximum extent permitted by law, we will have no Liability, and you release and discharge us from all Liability, arising from or in connection with any:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>event or circumstance beyond our reasonable control;</li>
            <li>acts or omissions of you or your personnel;</li>
            <li>any defect, error, omission, lack of functionality or suitability (or the absence of, or reduction in, any anticipated result, outcome or benefit), inaccessibility of, interruption or outage with respect to the Platform;</li>
            <li>use of our Service or Content;</li>
            <li>any injury or loss to any person;</li>
            <li>Content which is incorrect, incomplete or out-of-date; or</li>
            <li>breach of this contract or any law.</li>
          </ul>

          <p className="mb-4">
            You agree that, to the maximum extent permitted by law, this contract excludes all terms, conditions and warranties implied by statute, in fact or on any other basis, except to the extent such terms, conditions and warranties are fully expressed in this contract.
          </p>
          <p className="mb-4">
            This clause will survive the termination or expiry of this contract.
          </p>

          <p className="mb-6">
            <strong>Indemnity:</strong> To the maximum extent permitted by law, you must indemnify us, and hold us harmless, against any Liability suffered by us arising from or in connection with your use of our Platform or any breach of this contract or any applicable laws by you. This indemnity is a continuing obligation, independent from the other obligations under this contract, and continues after this contract ends. It is not necessary for us to suffer or incur any Liability before enforcing a right of indemnity under this contract.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Intellectual Property</h2>
          <p className="mb-4">
            We retain ownership of all intellectual property rights in the Service and related materials. You must not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Copy, modify, or reverse engineer any part of the Service;</li>
            <li>Use our branding, logos, or materials without written permission;</li>
            <li>Infringe any third-party intellectual property rights in connection with your use of the Service.</li>
          </ul>
          <p className="mb-6">
            You retain ownership of any content you submit but grant us a non-exclusive, worldwide, royalty-free license to use it for the purpose of providing and improving the Service.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Termination</h2>
          <p className="mb-4">
            You may terminate your subscription at any time via your dashboard. We may suspend or terminate your access immediately if you breach these Terms.
          </p>
          <p className="mb-4">Upon termination:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Your access to the platform will cease;</li>
            <li>We may delete your data in accordance with our Privacy Policy and retention policy;</li>
            <li>Outstanding fees remain payable.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
          <p className="mb-6">
            We may update these Terms from time to time. Changes will be posted on our website and take effect upon publication. Material changes will be communicated via email or platform notification. Continued use of the Service constitutes acceptance.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-6">
            <strong>Everfree Pty Ltd</strong><br />
            Email: hello@healthvoice.com.au
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;