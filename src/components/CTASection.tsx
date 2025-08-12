import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";
const CTASection = () => {
  return <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Fill Your Calendar with Qualified Meetings?
          </h2>
          <p className="text-xl mb-8 opacity-90">Join the companies already using our AI-powered system to consistently book qualified sales meetings. Only pay for results.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3 justify-center">
              <Clock className="w-6 h-6" />
              <span>Setup in 7 Days</span>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <DollarSign className="w-6 h-6" />
              <span>Performance-Based Pricing</span>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <CheckCircle className="w-6 h-6" />
              <span>Guaranteed Results</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-10">
            <div className="space-y-4">
              <Button asChild variant="secondary" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] group">
                <a href="https://calendly.com/gamicmedia/discovery-call-clone?" target="_blank" rel="noopener noreferrer" aria-label="Book your free strategy call on Calendly">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="text-sm opacity-75">
                Free 30-minute strategy session • No obligations • See if you qualify
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-premium w-full md:w-[560px] lg:w-[720px]">
              <iframe src="https://calendly.com/your-calendly-link" width="100%" height="500" frameBorder="0" title="Schedule a meeting" className="rounded-lg w-full"></iframe>
            </div>
          </div>

          <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-4">What You'll Get On This Call:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Complete audit of your current outbound efforts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Custom strategy for your specific market</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>AI personalization opportunities analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>ROI projection for your business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;