import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Zap, AlertTriangle, Handshake, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Hyper Targeted Lead Lists",
      description: "We'll build you a list of whoever you want to work with depending on company headcount, revenue, location, industry and much more."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Tailored Solutions",
      description: "We understand that not every business is the same. Hence, our approach is entirely customized to align with your objectives, audience, and industry."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Steady Lead Flow",
      description: "Parterning with us guarantees a dependable stream of qualified leads, thanks to our refined methods and continuous optimization efforts."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Efficiency and Resource Optimization",
      description: "Entrusting your lead generation to us grants you the freedom to use your time and resources towards core business functions, knowing that part of your business is in capable hands."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Seasoned Expertise",
      description: "Our team possesses extensive knowledge and hands-on experience in anything cold email and lead generation related that has come, through years of dedicated practice."
    },
    {
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: "Transparant Performance Tracking",
      description: "With our analytics and reporting tools, you gain full insight into the effectiveness of your campaigns, helping you to maximize returns."
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
                <h4 className="text-lg font-semibold mb-2">Inconsistent Lead Flow</h4>
                <p className="text-muted-foreground">Is lead flow in your agency currently inconsistent? Are some months better than others in terms of getting new leads?</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Step 2 icon</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Reliance On Referrals</h4>
                <p className="text-muted-foreground">Are referrals and word of mouth the only way you get new business in through the door? Do you want new ways to get clients without soley relying on word of mouth?</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Step 3 icon</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Lack Of Time</h4>
                <p className="text-muted-foreground">Do you not have the time to try different acquisition channels? Do you want to try new ways to get meetings on your calendar but just are busy running your agency?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Work With <span className="text-primary">Gamic Media</span>
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