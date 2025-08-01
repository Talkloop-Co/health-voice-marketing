import { Button } from "@/components/ui/button";
import { Phone, Shield, Zap, Trophy, Clock } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";
const Hero = () => {
  return <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-medical-teal/5" />



      <div className="py-20 container lg:py-28 relative mx-auto px-4">
      {/* ElevenLabs Badge - Top Right */}
      <div className="absolute top-0 right-0 z-20 pr-4">
        <div className="flex bg-white/10 backdrop-blur-sm rounded-b-xl p-2.5 border-b border-l border-r border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
          <a href="https://elevenlabs.io/text-to-speech">
            <div className="flex-shrink-0 inline-flex items-center gap-3">
              <img
                src="https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp"
                alt="Text to Speech"
                className="w-[120px] max-w-full h-auto"
              />
            <span className="flex items-center gap-1 text-white/90 font-bold text-xs tracking-wide bg-white/5 border border-white/15 px-2 py-1 rounded-lg shadow-sm">
              🏆
              Winner
            </span>
            </div>
          </a>

        </div>
      </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-calm-gray px-4 py-2 text-sm font-medium text-trust-blue">
                <Shield className="h-4 w-4" />
                Privacy Protected & Secure
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground lg:text-6xl">
                Never miss a patient{" "}
                <span className="whitespace-nowrap">
                  call <span className="text-health-green">again</span>
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-primary-foreground/90 lg:text-2xl">
                HealthVoice is your AI receptionist, made just for Cliniko. It picks up calls, books and reschedules patients, and answers their questions — 24/7.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="demo" size="lg" className="text-lg px-8 py-6 h-auto">
                <Phone className="h-5 w-5" />
                Book Your Demo
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Zap className="h-5 w-5 text-health-green" />
                <span className="font-medium">10-minute setup</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="h-5 w-5 text-health-green" />
                <span className="font-medium">24/7 Availability</span>
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-card">
              <img src={heroImage} alt="Healthcare AI Voice Assistant" className="w-full h-auto object-cover" loading="eager" />
            </div>
            <div className="absolute -top-4 -right-4 h-full w-full bg-health-green/20 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          {/* Desktop: 3 column grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm italic">
                "Game changer for our clinic. No more missed calls."
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm italic">
                "Setup was easy and Cliniko integration works flawlessly."
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm italic">
                "We can focus on patient care while HealthVoice handles calls."
              </p>
            </div>
          </div>

          {/* Mobile: Marquee scrolling */}
          <div className="sm:hidden">
            <div className="flex gap-4 animate-marquee">
              {[
                "Game changer for our clinic. No more missed calls.",
                "Setup was easy and Cliniko integration works flawlessly.",
                "We can focus on patient care while HealthVoice handles calls.",
                "Game changer for our clinic. No more missed calls.",
                "Setup was easy and Cliniko integration works flawlessly."
              ].map((review, index) => (
                <div key={index} className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg backdrop-blur-sm min-w-[280px] flex-shrink-0">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 text-sm italic">
                    "{review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
