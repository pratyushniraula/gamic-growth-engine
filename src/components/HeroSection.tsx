import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Indicator */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            DEAL ORIGINATION FOR FINANCIAL FIRMS
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Off-Market Deal Flow for <span className="text-primary">M&amp;A Advisors &amp; Investment Banks</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We find owners showing exit signals, qualify them by phone, and book them onto your calendar, all under your brand. You just close.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Signal-Based Targeting</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Human SDR Qualification</span>
            </div>
          </div>

          {/* VSL Video */}
          <div className="mb-8">
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 border border-primary/20">
              <iframe
                src="https://fast.wistia.net/embed/iframe/lphdfepth3?seo=false&videoFoam=true"
                title="Gamic Media - VSL"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button asChild variant="hero" size="xl" className="group hover:animate-none">
              <a
                href="https://calendly.com/gamicmedia/discovery-call-clone?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your free strategy call on Calendly"
              >
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10–30</div>
              <div className="text-sm text-muted-foreground">Qualified seller calls per month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">14 days</div>
              <div className="text-sm text-muted-foreground">To first qualified conversation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Under your brand</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
