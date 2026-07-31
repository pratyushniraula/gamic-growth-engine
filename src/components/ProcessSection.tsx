import { Button } from "@/components/ui/button";
import { Target, Send, CalendarCheck, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Deal criteria & shortlist",
      description:
        "We start from your exact thesis, sector, geography, revenue/EBITDA band, ownership structure, transaction type, and signal-score a qualified shortlist.",
      deliverables: ["Thesis Intake", "Signal Scoring", "Qualified Shortlist"],
    },
    {
      icon: Send,
      number: "02",
      title: "Signal-based outreach",
      description:
        "Personalized email and LinkedIn, 4–6 touches over 3–4 weeks, each message written to the owner's specific company and tenure. All under your brand.",
      deliverables: ["Email & LinkedIn Sequences", "Owner-Specific Personalization", "Your Brand Throughout"],
    },
    {
      icon: CalendarCheck,
      number: "03",
      title: "SDR qualification & handover",
      description:
        "Every reply is phone-qualified, then booked onto your calendar with a full brief, signals identified, notes, and a suggested first-call approach.",
      deliverables: ["Phone Qualification", "Calendar Booking", "Full Pre-Call Brief"],
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-subtle scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">{step.number}</div>

                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Deliverables:</h4>
                  {step.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="hero" size="xl" className="group">
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
      </div>
    </section>
  );
};

export default ProcessSection;
