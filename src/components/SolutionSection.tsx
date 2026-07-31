import { Filter, PhoneCall, Shield } from "lucide-react";

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
      title: "Human SDR qualification",
      description:
        "Every positive reply gets a live SDR call confirming deal size, ownership structure, timing, and genuine interest before any introduction. You never enter a call blind.",
    },
    {
      icon: Shield,
      title: "Under your brand, lists you own",
      description:
        "All outreach runs as your firm, your reputation protected at every touch, and the proprietary target lists we build are yours to keep beyond the engagement.",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Not Another Platform. <span className="text-primary">A Desk That Does the Work.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software hands you a database and leaves the work on your desk, the outreach, the follow-up, the qualifying,
            the guessing about who's real. Gamic runs the entire origination desk for you, under your brand, and hands
            you booked calls with a full brief. You were hired to close deals, not to prospect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
