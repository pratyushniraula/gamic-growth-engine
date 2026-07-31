import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Deal Flow You Can Forecast</h2>
          <p className="text-xl mb-4 opacity-90">
            Every week without a systematic origination process is another week your pipeline depends on referrals,
            while competitors build proprietary deal flow.
          </p>
          <p className="text-lg mb-10 opacity-80">
            We confirm fit before any engagement. Walk us through your mandate focus on a 30-minute call, and we'll tell
            you honestly whether we can build you a pipeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-primary-foreground/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="text-sm opacity-75 mb-1">Step 1</div>
              <div className="font-semibold">Kickoff Call (30 min)</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="text-sm opacity-75 mb-1">Step 2</div>
              <div className="font-semibold">Deal Criteria Workshop</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="text-sm opacity-75 mb-1">Step 3</div>
              <div className="font-semibold">Outreach Live in 3 Weeks</div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-10">
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
              >
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
              <p className="text-sm opacity-75">Free 30-minute call • No obligations • We confirm fit first</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-premium w-full md:w-[560px] lg:w-[720px]">
              <iframe
                src="https://calendly.com/gamicmedia/discovery-call-clone"
                width="100%"
                height="500"
                frameBorder="0"
                title="Schedule a meeting"
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-4">What You'll Get On This Call:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>A review of your current origination process</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Signal criteria mapped to your mandate focus</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>An honest read on whether we can build your pipeline</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
