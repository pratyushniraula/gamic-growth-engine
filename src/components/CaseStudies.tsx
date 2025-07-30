import { Calendar, DollarSign, Users, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const CaseStudies = () => {
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setOpenCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const cases = [
    {
      company: "TechScale Pro",
      industry: "SaaS",
      founder: "Sarah Chen",
      role: "CEO",
      timeline: "Within 60 Days",
      meetings: "52",
      revenue: "$280K",
      problem: "Sarah's team was struggling with inconsistent lead flow and spending too much time on prospecting instead of closing deals.",
      solution: "We implemented our AI-powered outbound system targeting mid-market SaaS companies, resulting in a 400% increase in qualified meetings.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      company: "Revenue Rocket",
      industry: "Marketing Agency", 
      founder: "Michael Torres",
      role: "Founder",
      timeline: "Within 45 Days",
      meetings: "38",
      revenue: "$190K",
      problem: "Michael needed a predictable way to book meetings with B2B service companies without his team getting burned out on outreach.",
      solution: "Our performance-based model delivered consistent, qualified meetings while his team focused entirely on client delivery and closing.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      company: "GrowthLabs",
      industry: "Consulting",
      founder: "Jennifer Park",
      role: "Managing Partner", 
      timeline: "Within 30 Days",
      meetings: "29",
      revenue: "$145K",
      problem: "Jennifer's consulting firm had great results for clients but struggled to consistently fill their pipeline with enterprise prospects.",
      solution: "We developed a targeted approach focusing on Fortune 500 companies, resulting in higher-value meetings and faster deal cycles.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from <span className="text-primary">Real Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped B2B service providers and SaaS companies consistently book more qualified meetings and close more deals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Collapsible key={index} open={openCards[index]} onOpenChange={() => toggleCard(index)}>
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.founder}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-foreground">{caseStudy.founder}</h3>
                    <p className="text-sm text-muted-foreground">{caseStudy.role} at {caseStudy.company}</p>
                    <p className="text-xs text-primary font-medium">{caseStudy.industry}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-subtle rounded-lg">
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-foreground">{caseStudy.meetings}</div>
                    <div className="text-xs text-muted-foreground">Meetings</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-foreground">{caseStudy.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-foreground">{caseStudy.timeline.split(' ')[1]}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                </div>

                {/* Snippet - always visible */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.problem.substring(0, 100)}...</p>
                </div>

                <CollapsibleContent className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Full Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Solution & Results:</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                </CollapsibleContent>

                {/* Expand/Collapse Button */}
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className={`w-full transition-colors ${
                      openCards[index] 
                        ? 'bg-primary text-primary-foreground shadow-glow' 
                        : 'hover:bg-primary hover:text-primary-foreground hover:shadow-glow'
                    }`}
                  >
                    {openCards[index] ? 'Show Less' : 'Read Full Case Study'}
                    {openCards[index] ? 
                      <ChevronUp className="w-4 h-4 ml-2" /> : 
                      <ChevronDown className="w-4 h-4 ml-2" />
                    }
                  </Button>
                </CollapsibleTrigger>
              </div>
            </Collapsible>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;