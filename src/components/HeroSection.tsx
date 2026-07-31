import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import CountUpStat from "@/components/CountUpStat";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card mb-8">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
            <span className="eyebrow text-primary-foreground/90">Deal Origination for Financial Firms</span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display font-bold text-foreground mb-8 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Off-Market Deal Flow for <span className="text-primary-glow">M&amp;A Advisors &amp; Investment Banks</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 measure mx-auto leading-relaxed">
            We find owners showing exit signals, qualify them by phone, and book them onto your calendar, all under your brand. You just close.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Signal-Based Targeting</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Human Appointment Setter Qualification</span>
            </div>
          </div>

          {/* VSL Video */}
          <div className="mb-10">
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-premium border border-border">
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
            <Button asChild variant="hero" size="xl" className="group w-full sm:w-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 pt-12 border-t border-border">
            <div className="text-center">
              <CountUpStat value="10–30" label="Qualified seller calls per month" className="text-4xl md:text-5xl" />
            </div>
            <div className="text-center">
              <CountUpStat value="14 days" label="To first qualified conversation" className="text-4xl md:text-5xl" />
            </div>
            <div className="text-center">
              <CountUpStat value="100%" label="Under your brand" className="text-4xl md:text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
