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
import { useEffect } from "react";
import { scrollToSection } from "@/utils/navigation";

const Index = () => {
  useEffect(() => {
    // Handle scrolling to anchor on page load
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # character
      scrollToSection(sectionId);
    }
  }, []);

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
          __html: '<elevenlabs-convai agent-id="agent_4001k3619fe9e61tng0t034d0tmj"></elevenlabs-convai>'
        }}
      />
    </div>
  );
};

export default Index;
