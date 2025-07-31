import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is this different from other AI receptionists?",
      answer: "We're specifically built for Cliniko and healthcare practices. Unlike generic AI solutions, we understand medical terminology, triage protocols, and healthcare workflows. Our AI is trained on healthcare-specific conversations and integrates deeply with Cliniko's features."
    },
    {
      question: "What can the AI actually do?",
      answer: "Our AI can handle appointment bookings, cancellations, and rescheduling in real-time with your Cliniko calendar. It can answer patient questions about your services, take detailed messages, perform basic triage, and even identify returning patients to provide personalized service."
    },
    {
      question: "How easy is it to set up?",
      answer: "Setup takes about 10-15 minutes. We'll help you connect your Cliniko account, scan your website to create FAQs, and configure your AI receptionist. Then simply forward your calls to your new AI number. Our team provides 1:1 support throughout the process."
    },
    {
      question: "Is it secure and privacy compliant?",
      answer: "Absolutely. We use end-to-end encryption, strict access controls, and comply with Australian Privacy Principles and international best practices. Your patient data stays secure and private. We're built for healthcare from the ground up, not adapted from other industries."
    },
    {
      question: "What if a caller needs to speak to a human?",
      answer: "If our AI can't handle a request, it will instantly take a detailed message or transfer the call to your team based on your preferences. Nothing gets missed, and patients never feel stuck."
    },
    {
      question: "Do patients complain about speaking with AI?",
      answer: "Our AI uses natural, healthcare-trained voices that sound remarkably human. Most patients don't realize they're speaking with AI initially. We focus on being helpful and empathetic, which patients appreciate regardless of whether it's AI or human."
    },
    {
      question: "What are the limitations?",
      answer: "Our AI won't provide medical advice or diagnoses - it's designed to be clinically safe. For complex medical emergencies, it will direct patients to appropriate emergency services. It handles administrative tasks and basic triage, not clinical decision-making."
    },
    {
      question: "How reliable is the system?",
      answer: "Our system has handled thousands of calls with 99.9% uptime. We monitor every call and continuously improve the AI. If issues arise, our team addresses them immediately. Unlike human staff, your AI receptionist is never sick, tired, or on vacation."
    },
    {
      question: "Are there any contracts?",
      answer: "No long-term contracts required. We offer month-to-month plans because we're confident you'll love the service. You can cancel anytime, though most practices find the ROI so compelling they never want to go back."
    },
    {
      question: "How much does it cost?",
      answer: "Our plans start at $299/month for small practices, with higher tiers for busier clinics. When you consider the cost of missed calls and the time saved by your staff, most practices see positive ROI within the first month."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI receptionist for Cliniko practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We'd love to help.
          </p>
          <button className="text-trust-blue hover:text-trust-blue/80 font-medium underline">
            Book a call with our team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
