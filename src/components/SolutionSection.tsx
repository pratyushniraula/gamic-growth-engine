import { Filter, PhoneCall, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

const SolutionSection = () => {
  const features = [
    {
      icon: Filter,
      title: "Signal-based targeting",
      description:
        "We filter for founder tenure near exit windows, missing successors, recent equity events, and hiring patterns signaling transition. Owners likely thinking about a transaction right now, not names that fit on paper.",
    },
    {
      icon: PhoneCall,
      title: "Human appointment setter qualification",
      description:
        "Every positive reply gets a live appointment setter call confirming deal size, ownership structure, timing, and genuine interest before any introduction. You never enter a call blind.",
    },
    {
      icon: Shield,
      title: "Under your brand, lists you own",
      description:
        "All outreach runs as your firm, your reputation protected at every touch, and the proprietary target lists we build are yours to keep beyond the engagement.",
    },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">02 — The Approach</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Not Another Platform. <span className="text-primary-glow">A Desk That Does the Work.</span>
          </h2>
          <p className="text-lg text-muted-foreground measure mx-auto">
            Software hands you a database and leaves the work on your desk, the outreach, the follow-up, the qualifying,
            the guessing about who's real. Gamic runs the entire origination desk for you, under your brand, and hands
            you booked calls with a full brief. You were hired to close deals, not to prospect.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Reveal
              key={index}
              delay={index * 100}
              className="surface-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
