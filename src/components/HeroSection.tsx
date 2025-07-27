import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-primary/20 text-primary text-sm font-semibold mb-8 border border-primary/20">
            ✨ Premium B2B Lead Generation Agency
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transform Cold Prospects Into 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Hot Meetings</span>
            <br />While You Sleep
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Gamic Media's hyper-personalized outbound engine uses advanced AI and Clay intelligence to fill your calendar with qualified prospects. Performance-based pricing means you only pay for booked meetings.
          </p>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Performance-Based Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">$200-300 Per Qualified Meeting</span>
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example&autoplay=0&mute=1&controls=1&rel=0" 
                title="Gamic Media - B2B Lead Generation" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button variant="hero" size="xl" className="group animate-pulse hover:animate-none">
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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