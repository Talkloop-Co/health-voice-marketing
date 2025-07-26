import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CalendarClock, CalendarX, UserCheck, MessageSquare, Settings } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Calendar,
      title: "Bookings",
      description: "Seamless appointment scheduling directly into your Cliniko calendar"
    },
    {
      icon: CalendarClock,
      title: "Rescheduling",
      description: "Effortless appointment changes with real-time availability checks"
    },
    {
      icon: CalendarX,
      title: "Cancellations",
      description: "Professional cancellation handling with automated slot management"
    },
    {
      icon: UserCheck,
      title: "Caller Identification",
      description: "Instant patient recognition with personalized service delivery"
    },
    {
      icon: MessageSquare,
      title: "Services Knowledge",
      description: "Comprehensive understanding of your clinic's services and offerings"
    },
    {
      icon: Settings,
      title: "Customisation",
      description: "Tailored responses and workflows specific to your practice needs"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl mb-4">
            What HealthVoice can do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive patient call management tailored specifically for your Cliniko practice
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-card shadow-card border text-center hover:shadow-glow transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-card text-primary mb-4">
                  <capability.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;