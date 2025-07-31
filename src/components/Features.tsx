import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Database, 
  Shield, 
  Clock, 
  Users, 
  Stethoscope,
  FileText,
  AlertTriangle 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "AI Voice Receptionist",
      description: "Handle appointments, cancellations, and patient inquiries 24/7 with natural conversation flows designed for healthcare.",
      color: "text-trust-blue"
    },
    {
      icon: Database,
      title: "Deep Cliniko Integration",
      description: "Built specifically for Cliniko with seamless two-way sync. Auto-lookup patients by caller ID and provide personalized service with their booking history.",
      color: "text-health-green"
    },
    {
      icon: Stethoscope,
      title: "Medical Triage",
      description: "Pre-screen patients with intelligent triage questions. Route urgent cases appropriately while handling routine bookings efficiently.",
      color: "text-medical-teal"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Built with healthcare security in mind. Encrypted calls, secure data handling, and privacy-first architecture.",
      color: "text-trust-blue"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss another call. Your AI receptionist works around the clock, ensuring patients can reach you anytime.",
      color: "text-health-green"
    },
    {
      icon: Users,
      title: "Patient Recognition",
      description: "Recognize returning patients instantly and provide personalized service based on their history and preferences.",
      color: "text-medical-teal"
    },
    {
      icon: FileText,
      title: "Automated Documentation",
      description: "Generate call summaries, update patient records, and create follow-up tasks automatically after each interaction.",
      color: "text-trust-blue"
    },
    {
      icon: AlertTriangle,
      title: "Smart Escalation",
      description: "Intelligent flagging system identifies when human intervention is needed, ensuring complex cases get proper attention.",
      color: "text-health-green"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl mb-4">
            Everything your clinic needs
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Purpose-built for healthcare with features that understand your workflow and patient needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm transition-all duration-200 hover:bg-primary-foreground/20 hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-health-green/20">
                      <IconComponent className="h-8 w-8 text-health-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;