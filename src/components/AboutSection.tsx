import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Zap, AlertTriangle, Handshake, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Precision Targeting",
      description: "We identify and reach your ideal prospects using advanced data analytics and proven targeting strategies."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Automated Outreach",
      description: "Our sophisticated automation systems handle initial contact and follow-ups while maintaining a personal touch."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Qualified Lead Generation",
      description: "We don't just generate leads - we qualify them to ensure they're genuinely interested and ready to buy."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Seamless Handoff",
      description: "Pre-qualified prospects are delivered directly to your calendar, ready for meaningful sales conversations."
    }
  ];

  return (
    <section id="how-we-operate" className="pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-16 md:mb-24 shadow-sm transition-shadow hover:shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Are You a Struggling Business?</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Step 1 icon</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Research & Strategy</h4>
                <p className="text-muted-foreground">We analyze your ideal customer profile and develop a targeted outreach strategy.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Step 2 icon</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Execute & Engage</h4>
                <p className="text-muted-foreground">Our team launches personalized campaigns across multiple channels to engage prospects.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Step 3 icon</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Deliver & Convert</h4>
                <p className="text-muted-foreground">Qualified prospects are booked directly into your calendar for high-conversion sales calls.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="text-primary">Gamic Media</span> Does
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're a specialized lead generation agency that helps B2B companies scale their sales by 
            connecting them with qualified prospects who are ready to buy. Our proven system transforms 
            cold outreach into warm conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;