import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HealthVoice has transformed how we handle patient calls. Our reception staff can now focus on in-person patient care while the AI handles phone inquiries perfectly.",
      author: "Dr. Sarah Mitchell",
      clinic: "Sydney Physiotherapy Centre",
      location: "Sydney, Australia"
    },
    {
      quote: "The Cliniko integration was seamless and the setup took exactly 10 minutes as promised. Our missed call rate dropped to zero within the first week.",
      author: "Mark Thompson",
      clinic: "Wellington Sports Medicine",
      location: "Wellington, New Zealand"
    },
    {
      quote: "What impressed me most is how natural the conversations sound. Patients often don't realize they're speaking with an AI until we tell them.",
      author: "Dr. Emma Clarke",
      clinic: "London Wellness Clinic",
      location: "London, United Kingdom"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl mb-4">
            Hear it from our clinics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from healthcare professionals using HealthVoice
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-background shadow-card border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary">
                    {testimonial.clinic}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;