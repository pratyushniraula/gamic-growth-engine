import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-foreground">
          <Reveal>
            <p className="eyebrow mb-4">06 — Get Started</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Deal Flow You Can Forecast</h2>
            <p className="text-lg text-muted-foreground mb-4 measure mx-auto">
              Every week without a systematic origination process is another week your pipeline depends on referrals,
              while competitors build proprietary deal flow.
            </p>
            <p className="text-base text-muted-foreground mb-12 measure mx-auto">
              We confirm fit before any engagement. Walk us through your mandate focus on a 30-minute call, and we'll tell
              you honestly whether we can build you a pipeline.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { step: "Step 1", label: "Kickoff Call (30 min)" },
              { step: "Step 2", label: "Deal Criteria Workshop" },
              { step: "Step 3", label: "Outreach Live in 2 Weeks" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} className="surface-card p-6 text-left">
                <div className="eyebrow mb-2">{item.step}</div>
                <div className="font-semibold">{item.label}</div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-12">
            <div className="space-y-4 w-full lg:w-auto">
              <Button asChild variant="hero" size="xl" className="group w-full lg:w-auto">
                <a
                  href="https://calendly.com/gamicmedia/discovery-call-clone?"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your free strategy call on Calendly"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="eyebrow">Free 30-minute call • No obligations • We confirm fit first</p>
            </div>

            <div className="surface-card p-4 w-full md:w-[560px] lg:w-[720px]">
              <iframe
                src="https://calendly.com/gamicmedia/discovery-call-clone"
                width="100%"
                height="500"
                frameBorder="0"
                title="Schedule a meeting"
                className="rounded-lg w-full bg-background"
              ></iframe>
            </div>
          </div>

          <div className="surface-card p-8">
            <h3 className="text-lg font-semibold mb-6">What You'll Get On This Call:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left text-muted-foreground">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>A review of your current origination process</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Signal criteria mapped to your mandate focus</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>An honest read on whether we can build your pipeline</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>A clear 90-day pilot scope, if there's a fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
