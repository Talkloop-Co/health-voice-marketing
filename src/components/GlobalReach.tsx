import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

const GlobalReach = () => {
  const countries = [
    "United Kingdom", "Australia", "Canada", "New Zealand", "Ireland", "and more"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl mb-4">
            Supporting allied health clinics around the world
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Trusted by healthcare professionals across multiple countries and time zones
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="h-8 w-8 text-health-green" />
                <h3 className="text-2xl font-bold text-primary-foreground">Global Coverage</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-health-green rounded-full"></div>
                    <span className="text-primary-foreground/90">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="relative">
            {/* World map visualization */}
            <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm border border-primary-foreground/20">
              <div className="aspect-video relative overflow-hidden rounded-lg bg-primary-foreground/5">
                {/* World map with highlighted regions */}
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* World map continents outline */}
                  <g fill="currentColor" className="text-primary-foreground/20">
                    {/* North America */}
                    <path d="M20,30 Q30,25 50,30 L70,35 Q80,40 75,50 L70,60 Q60,65 45,60 L25,55 Q15,45 20,30Z" />
                    {/* Europe */}
                    <path d="M180,50 Q190,45 200,50 L210,55 Q215,60 210,65 L200,70 Q185,68 180,60 Z" />
                    {/* Australia */}
                    <path d="M320,130 Q340,125 350,135 L355,145 Q350,155 340,150 L325,145 Q315,140 320,130Z" />
                    {/* Asia */}
                    <path d="M220,40 Q250,35 280,45 L290,55 Q285,70 270,65 L240,60 Q210,50 220,40Z" />
                  </g>
                  
                  {/* Highlighted supported regions */}
                  <g className="animate-pulse">
                    {/* Australia/Oceania */}
                    <circle cx="330" cy="140" r="8" fill="#22c55e" opacity="0.8" />
                    <circle cx="330" cy="140" r="12" fill="#22c55e" opacity="0.3" />
                    <text x="330" y="155" textAnchor="middle" className="text-xs fill-primary-foreground">Australia</text>
                    
                    {/* UK/Europe */}
                    <circle cx="190" cy="60" r="6" fill="#22c55e" opacity="0.8" />
                    <circle cx="190" cy="60" r="10" fill="#22c55e" opacity="0.3" />
                    <text x="190" y="45" textAnchor="middle" className="text-xs fill-primary-foreground">UK</text>
                    
                    {/* Canada */}
                    <circle cx="60" cy="40" r="8" fill="#22c55e" opacity="0.8" />
                    <circle cx="60" cy="40" r="12" fill="#22c55e" opacity="0.3" />
                    <text x="60" y="25" textAnchor="middle" className="text-xs fill-primary-foreground">Canada</text>
                    
                    {/* New Zealand */}
                    <circle cx="360" cy="160" r="4" fill="#22c55e" opacity="0.8" />
                    <circle cx="360" cy="160" r="8" fill="#22c55e" opacity="0.3" />
                    <text x="360" y="175" textAnchor="middle" className="text-xs fill-primary-foreground">NZ</text>
                  </g>
                  
                  {/* Connection lines */}
                  <g stroke="#22c55e" strokeWidth="1" opacity="0.4" className="animate-pulse" strokeDasharray="2,2">
                    <line x1="190" y1="60" x2="330" y2="140" />
                    <line x1="60" y1="40" x2="190" y2="60" />
                    <line x1="330" y1="140" x2="360" y2="160" />
                  </g>
                </svg>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-primary-foreground/70 text-sm">
                  24/7 support across all time zones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;