import { Button } from "@/components/ui/button";
import { Target, Send, CalendarCheck, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

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
        "Personalized email and LinkedIn, 4–6 touches over 2 weeks, each message written to the owner's specific company and tenure. All under your brand.",
      deliverables: ["Email & LinkedIn Sequences", "Owner-Specific Personalization", "Your Brand Throughout"],
    },
    {
      icon: CalendarCheck,
      number: "03",
      title: "Appointment setter qualification & handover",
      description:
        "Every reply is phone-qualified, then booked onto your calendar with a full brief, signals identified, notes, and a suggested first-call approach.",
      deliverables: ["Phone Qualification", "Calendar Booking", "Full Pre-Call Brief"],
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">03 — How It Works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How It <span className="text-primary-glow">Works</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 100} className="relative">
              <div className="surface-card p-8 h-full transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-sm tracking-[0.18em] text-muted-foreground">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                <div className="space-y-3 pt-6 border-t border-border">
                  <h4 className="eyebrow">Deliverables</h4>
                  {step.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-16">
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
      </div>
    </section>
  );
};

export default ProcessSection;
