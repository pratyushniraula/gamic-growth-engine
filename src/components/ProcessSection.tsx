import { Target, Zap, Calendar, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Deep Business Analysis",
      description: "We dive deep into your business, offers, and ideal customer profile to understand exactly who your perfect prospects are and what messaging will resonate.",
      deliverables: ["Target Market Research", "Offer Optimization", "ICP Definition"]
    },
    {
      icon: Zap,
      number: "02", 
      title: "AI-Powered Campaign Setup",
      description: "Using Clay and advanced AI tools, we build your complete outbound infrastructure with personalized email sequences, lead lists, and sending systems.",
      deliverables: ["Email Infrastructure", "AI Personalization Setup", "Lead Database Creation"]
    },
    {
      icon: Calendar,
      number: "03",
      title: "Automated Outreach Launch", 
      description: "We launch targeted campaigns with hyper-personalized messaging to your ideal prospects and continuously optimize for maximum response rates.",
      deliverables: ["Campaign Launch", "A/B Testing", "Response Optimization"]
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Qualified Meetings Delivered",
      description: "We handle all responses and book qualified meetings directly on your calendar. You focus on closing deals while we fill your pipeline.",
      deliverables: ["Meeting Booking", "Lead Qualification", "Calendar Management"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How We Generate <span className="text-primary">Qualified Meetings</span> for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process combines AI technology, data intelligence, and human expertise to consistently book high-quality sales meetings with your ideal prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300 h-full">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;