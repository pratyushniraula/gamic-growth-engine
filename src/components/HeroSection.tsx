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
            AGENCIES & B2B BUSINESSES
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            We'll Book You <span className="text-primary">5-12 Qualified Sales Calls</span> Every Month
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          With Your Ideal Customers on a Pay-Per Meeting Basis
          </p>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Performance-Based Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Personalized Outreach Framework</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Done-For-You System</span>
            </div>
          </div>
          
          {/* YouTube Video */}
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 border border-primary/20">
              <iframe
                src="https://fast.wistia.net/embed/iframe/c2tknwrvcg?seo=false&videoFoam=true"
                title="Gamic Media - Overview Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
              <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
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
          
          {/* Social Proof Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated for Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Qualified Meetings Booked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;