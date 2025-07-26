import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Globe2 } from "lucide-react";

const SecurityPrivacy = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy regulations and data protection standards."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All patient communications are encrypted in transit and at rest for maximum security."
    },
    {
      icon: FileCheck,
      title: "GDPR",
      description: "Complete compliance with European data protection regulations for international patients."
    },
    {
      icon: Globe2,
      title: "Australian Privacy Principles",
      description: "Adheres to Australia's Privacy Act for comprehensive patient data protection."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl mb-4">
            Built for healthcare privacy and security
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Enterprise-grade security and compliance built specifically for healthcare environments
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-health-green/20">
                      <IconComponent className="h-8 w-8 text-health-green" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
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

export default SecurityPrivacy;