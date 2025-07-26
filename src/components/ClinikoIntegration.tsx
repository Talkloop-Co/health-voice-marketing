import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const ClinikoIntegration = () => {
  const integrationFeatures = [
    "Seamless appointment booking",
    "Patient record synchronization",
    "Treatment note integration",
    "Billing and payment processing",
    "Real-time calendar updates",
    "Automated reminder systems"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                Built specifically for Cliniko
              </h2>
              <p className="text-xl text-muted-foreground">
                Deep native integration with Cliniko means HealthVoice works seamlessly with your existing workflow,
                no complex setup or data migration required.
              </p>
            </div>

            <div className="grid gap-3">
              {integrationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-health-green flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-background border-border shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col items-center gap-4 mb-6 sm:flex-row sm:gap-6">
                  <svg className="w-32 h-auto flex-shrink-0" viewBox="0 0 243 58.9" preserveAspectRatio="xMidYMin meet">
                    <title>Cliniko</title>
                    <path fill="#00A9CE" d="M205.1,24.2c-0.4-0.4-0.5-1-0.1-1.4s1-0.5,1.4-0.1c1.8,1.5,4.1,1.4,5.6,0c0.4-0.4,1-0.3,1.4,0.1s0.3,1-0.1,1.4C211.1,26.2,207.6,26.4,205.1,24.2z" />
                    <path fill="#6AD1E3" d="M192.7,4.8c0.3-0.3,0.1-0.6,0.8-1.1c1.9-1.6,8.5-1.4,9.1,0.9c0.2,0.7,0.4,0.3,3.7,1.1c0.2,0,0.9,0.3,0.9,0c0-0.2-0.7-1.2-0.9-1.4c-4.3-5.4-12.6-5.7-17.2-0.5c-0.2,0.2-1.6,1.7-1.1,2c0.3,0.2,0.5-0.1,4.1-0.7C192.4,5,192.6,5,192.7,4.8z" />
                    <path fill="#00A9CE" d="M197.7,9.1c1.4,0,3.1-3,3-3.6c-0.2-1.7-5.8-1.7-5.9,0C194.8,6,196.4,9.1,197.7,9.1z" />
                    <path fill="#007FA3" d="M154.1,27.2c-8.3,0-15,5.9-15,16.1c0,20.9,29.6,20.9,29.6-0.6C168.7,33.5,162.8,27.2,154.1,27.2z M153.9,54.7c-12.1,0-12.3-23.4,0.1-23.4C166.2,31.3,166,54.7,153.9,54.7z" />
                    <path fill="#007FA3" d="M35.4,49.9l-1.3-1.1c-0.7-0.4-1.5-0.3-2.2,0.2c-3.2,2.5-6,4.2-10.8,4.2c-8.6,0-15.6-7.2-15.6-16.1S12.5,21,21.1,21c3.7,0,7.7,1.6,10.7,4.2c0.7,0.7,1.5,0.8,2.1,0.5l1.5-1.5c0.7-0.7,0.8-1.8-0.1-2.7c-4.4-3.7-8.8-5.4-14.1-5.4C9.5,16.1,0,25.6,0,37.2s9.5,21,21.1,21c5.5,0,10.4-1.9,14.2-5.7C36.1,51.8,36.1,50.4,35.4,49.9z" />
                    <path fill="#007FA3" d="M45.8,13.8h-1.4c-1.1,0-2.1,0.9-2.1,2.1v40.3c0,1.1,0.9,2.1,2.1,2.1h1.4c1.1,0,2.1-0.9,2.1-2.1V15.8C47.8,14.7,46.9,13.8,45.8,13.8z" />
                    <path fill="#007FA3" d="M58.4,27.9H57c-1.1,0-2.1,0.9-2.1,2.1v26.1c0,1.1,0.9,2.1,2.1,2.1h1.4c1.1,0,2.1-0.9,2.1-2.1V30C60.5,28.8,59.5,27.9,58.4,27.9z" />
                    <path fill="#007FA3" d="M103.5,27.9h-1.4c-1.1,0-2.1,0.9-2.1,2.1v26.1c0,1.1,0.9,2.1,2.1,2.1h1.4c1.1,0,2.1-0.9,2.1-2.1V30C105.5,28.8,104.6,27.9,103.5,27.9z" />
                    <path fill="#007FA3" d="M124.7,40.2c0.4-0.4,8.3-8.9,8.4-8.9c1.2-1.4,0.2-3.5-1.6-3.4c-0.9,0-1.6-0.1-2.3,0.6L118,40.1c0-33.5,0-21.7,0-24.3c0-1.1-0.9-2.1-2.1-2.1h-1.4c-1.1,0-2.1,0.9-2.1,2.1v40.3c0,1.1,0.9,2.1,2.1,2.1h1.4c1.2,0,2.1-1,2.1-2.1c0-1,0,3.4,0-9.3c0,0,2.3-2.7,3-3.3c8.8,2,10.2,9,10.5,12.6c-0.1,0.8,0.7,2.1,2.1,2.1h1c1.2,0,2.1-1,2.1-2.1C136.4,51.9,135.1,42.8,124.7,40.2z" />
                    <path fill="#007FA3" d="M81,27.2c-3.9,0-7.1,2.1-8.6,4.9V30c0-1.3-0.9-2.2-2-2.2h-0.9c-1.1,0-2.1,0.9-2.1,2.1c0,2.6,0-9.6,0,25.9c-0.1,1.2,0.8,2.3,2,2.3h1.4c1.1,0,2.1-0.9,2.1-2.1c0-1.4,0,5.3,0-14.7c0-6.9,4.2-9.6,7.8-9.6c5.2,0,7,4.1,7,9c0,20.9,0,13.9,0,15.4c0,1.2,0.9,2.1,2.1,2.1h1.4c1.1,0,2.1-0.9,2.1-2.1v-16C93.2,29.7,86.4,27.2,81,27.2z" />
                    <path fill="#007FA3" d="M57.7,16c-4.6,0-4.6,6.8-0.1,6.8C62.3,22.8,62.2,16,57.7,16z" />
                    <path fill="#007FA3" d="M102.8,16c-4.6,0-4.5,6.8-0.1,6.8C107.4,22.8,107.2,16,102.8,16z" />
                    <path fill="#06ACD6" d="M187,56L187,56L187,56L187,56z" />
                    <path fill="#6AD1E3" d="M208.5,8.3c-0.1-0.4-0.2-0.6-0.6-0.7c-0.4-0.2-2.1-0.7-4.5-0.9c-0.6-0.1-1.2-0.3-1.5,0.3c-0.4,0.6-0.7,1.2-1.2,1.7c-2.3,2.8-4,3-6.6-1.3c-0.8-1.3-2-0.8-3.2-0.6c-0.8,0.2-3.3,0.7-3.7,0.9c-0.4,0.2-0.5,0.9-0.6,1.7c-0.9,5.1,1.8,10,6.3,12.1c0.3,0.1,0.7,0.3,0.6,0.6c-0.1,0.6-1.2,0.9-1.6,1.2c-3.8,1.9-7.4,5-10.3,9.1c-4.8,7-6.4,15.1-6.8,23.6c-0.1,1.2,0.9,2.1,2,2.1h4.5c1,0,1.8-0.7,2-1.6c0.5-4.7,1.5-10.2,3.7-14.4c3.3-6.7,8.4-11.4,13.2-13.7c0.9-0.4,2-0.8,1.1-1.9c-5.2-6.5-1.1-15.2,6.2-16.3C208.7,10.1,209,10,208.5,8.3z" />
                    <path fill="#05C3DE" d="M228.6,27c-0.3-0.2-0.9-0.5-0.9-0.9s0.5-0.5,0.8-0.7c8.7-5.4,4.8-18.7-5.3-18.7c-2.7,0-5.3,1.1-6.9,2.7c-0.5,0.5-2.1,1.9-1.4,2.7c0.3,0.3,0.7,0.6,1,0.8c1.9,1.8,3.1,4.4,3.1,7.2c0,2.1-0.6,3.8-1.7,5.6c-0.3,0.6-1,1.1-0.3,1.7c1.5,1.2,7.6,4.2,12.4,11.8c2.4,3.9,4.4,8.5,5.3,17c0,1,0.9,2,2,2h4.3c1.1,0,2-0.8,2-1.9C242.7,45,237.8,33.4,228.6,27z" />
                    <path fill="#06ACD6" d="M209.4,53L209.4,53L209.4,53z" />
                    <path fill="#00A9CE" d="M231.7,56.2c-0.3-2.9-0.8-5.4-1.7-8.3c-2.1-6.7-6.3-13.5-12.6-16.4c-1.3-0.6-5.1-1.9-6-0.9c-0.5,0.5-0.3,1.4,0.1,5.1c1.2,11.9,1.3,13.1,1.3,13.7c0,1.1-2.2,3.1-2.6,3.5c-0.3,0.3-0.9,0.3-1.3,0c-0.3-0.4-2.5-2.4-2.5-3.4c0-2.4,1.7-17.5,1.7-18c0-1.9-2.2-1.1-3.2-0.9c-7.9,1.8-13.2,9.6-15.7,17.4c-1,3.1-1.6,6.9-1.7,8.1c-0.1,1.1,0.9,2.1,2,2.1h40C230.8,58.2,231.7,57.2,231.7,56.2z" />
                  </svg>
                  <span className="text-3xl font-bold text-foreground">
                    + HealthVoice
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  "The integration was so smooth, it felt like HealthVoice was always part of Cliniko.
                  Our appointment booking has never been more efficient."
                </p>

                <div className="mt-4 text-muted-foreground/70 text-sm">
                  - Verified Cliniko User
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinikoIntegration;
