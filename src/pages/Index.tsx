import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Features from "@/components/Features";
import ClinikoIntegration from "@/components/ClinikoIntegration";
import SecurityPrivacy from "@/components/SecurityPrivacy";
import GlobalReach from "@/components/GlobalReach";
import PracticeTypes from "@/components/PracticeTypes";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Capabilities />
      <Features />
      <PracticeTypes />
      <SecurityPrivacy />
      {/* <ClinikoIntegration /> */}
      {/* <GlobalReach /> */}
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      {/* ElevenLabs Voice Widget */}
      <div
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_01k0b7qdh0feyt1jax9fhdhz1r"></elevenlabs-convai>'
        }}
      />
    </div>
  );
};

export default Index;
