import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import HealthVoiceIcon from "./HealthVoiceIcon";
import { handleSectionNavigation } from "@/utils/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <HealthVoiceIcon className="h-8 w-8" />
            <span className="text-xl font-bold text-black">HealthVoice</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/#features" 
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('features'); }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            {/* <a 
              href="/#pricing" 
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('pricing'); }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a> */}
            <a 
              href="/#security" 
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('security'); }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Security
            </a>
            <a 
              href="/#faq" 
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('faq'); }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('contact'); }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* <Button variant="ghost">Sign In</Button> */}
            <Button asChild variant="default">
              <a href="https://cal.com/nicolas-hoban-5khbph/healthvoice-demo" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a 
                href="/#features" 
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('features'); setIsOpen(false); }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              {/* <a 
                href="/#pricing" 
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('pricing'); setIsOpen(false); }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a> */}
              <a 
                href="/#security" 
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('security'); setIsOpen(false); }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Security
              </a>
              <a 
                href="/#faq" 
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('faq'); setIsOpen(false); }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
              <a 
                href="/#contact" 
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('contact'); setIsOpen(false); }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                {/* <Button variant="ghost" className="justify-start">Sign In</Button> */}
                <Button asChild variant="default" className="justify-start">
                  <a href="https://cal.com/nicolas-hoban-5khbph/healthvoice-demo" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
