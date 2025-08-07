import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 199,
      description: "Perfect for small practices",
      features: [
        "Up to 200 calls/month",
        "Basic appointment booking",
        "EMR integration (Cliniko, Jane)",
        "Standard business hours support",
        "Call recordings & summaries",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 499,
      description: "Most popular for growing clinics",
      features: [
        "Up to 500 calls/month",
        "Advanced triage workflows",
        "Multi-provider scheduling",
        "24/7 patient support",
        "Custom call scripts",
        "Priority phone support",
        "Analytics dashboard",
        "Patient satisfaction tracking"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 799,
      description: "For large practices & clinics",
      features: [
        "Up to 1,000 calls/month",
        "Multi-location support",
        "Advanced integrations",
        "Custom AI training",
        "Emergency dispatch protocols",
        "Dedicated account manager",
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="hidden py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your practice. All plans include privacy protection and basic integrations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-background shadow-card border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-health-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  <a href="https://cal.com/nicolas-hoban-5khbph/healthvoice-demo" target="_blank" rel="noopener noreferrer">
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No setup fees or long-term contracts.
          </p>
          <Button asChild variant="ghost" className="text-primary">
            <a href="https://cal.com/nicolas-hoban-5khbph/healthvoice-demo" target="_blank" rel="noopener noreferrer">
              Need a custom plan? Contact sales →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
