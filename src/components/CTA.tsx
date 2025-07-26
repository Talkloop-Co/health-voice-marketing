import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            Ready to transform your patient experience?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Join hundreds of healthcare practices who never miss a patient call. 
            Start your free trial today — no setup fees, no long-term contracts.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="demo" size="lg" className="text-lg px-8 py-6 h-auto">
              <Phone className="h-5 w-5" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto">
              <Calendar className="h-5 w-5" />
              Book a Demo
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 pt-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">14 days</div>
              <div className="text-sm">free trial</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">10 minutes</div>
              <div className="text-sm">to set up</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">HIPAA</div>
              <div className="text-sm">compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;