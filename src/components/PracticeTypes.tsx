import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Activity,
  Brain,
  Eye,
  Footprints,
  Bone,
  Hand,
  Syringe,
  Users,
  PersonStanding,
  Plus
} from "lucide-react";

const PracticeTypes = () => {
  const practiceTypes = [
    {
      icon: PersonStanding,
      name: "Physiotherapist"
    },
    {
      icon: Footprints,
      name: "Podiatrist"
    },
    {
      icon: Bone,
      name: "Chiropractor"
    },
    {
      icon: Brain,
      name: "Psychologist"
    },
    {
      icon: Hand,
      name: "Osteopath"
    },
    {
      icon: Eye,
      name: "Optometrist"
    },
    {
      icon: Syringe,
      name: "IV Infusions"
    },
    {
      icon: Plus,
      name: "And More"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl mb-4">
            Suitable for the following types of practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            HealthVoice adapts to the unique needs of different healthcare specialties
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {practiceTypes.map((practice, index) => {
            const IconComponent = practice.icon;
            return (
              <Card
                key={index}
                className="group bg-background shadow-card border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-primary/5"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {practice.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your practice type? HealthVoice can be customized for any healthcare specialty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeTypes;
