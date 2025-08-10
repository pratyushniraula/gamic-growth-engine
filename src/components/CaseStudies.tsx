import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
const CaseStudies = () => {
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({});
  const toggleCard = (index: number) => {
    setOpenCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const cases = [{
    company: "Deep Social Brands",
    founder: "Deepak Sharma",
    role: "CEO",
    results: "270,000 of revenue in 8 months",
    problem: "Only relied on referrals and word-of-mouth, struggling to scale their client base.",
    solution: "We used their case studies to target prospects similar to their previous clients. Leading to many booked meetings and closing multiple deals, including a Nasdaq listed company.",
    videoId: "oy9ACwC1-uM",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
  }, {
    company: "First Rank Digital",
    founder: "Rene Ramirez",
    role: "COO",
    results: "70+ meetings booked, 13 clients signed",
    problem: "First Rank Digital relied on cold calls to get leads and book meetings. While it did work, it required a lot of manual effort to keep their pipeline full.",
    solution: "Since partnering with us, they\'ve consistently filled their calendar with new leads. With automated lead generation, they\'ve signed multiple new clients while saving their time and resources for more strategic tasks.",
    videoId: "mKgSmpGUS-4",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }, {
    company: "Magnasan Films",
    founder: "Mathias Magnasan",
    role: "Founder",
    results: "25 meetings booked, 3 deals closed",
    problem: "Magnason Film purely relied on their previous work to get new clients but it wasn't a reliable method of client acquisition.",
    solution: "Since working with us, they've been getting a steady flow of leads every month and closed 3 new deals, including a dream client who plans to work with them for life!",
    videoId: "Fkst4al5y-Q",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }, {
    company: "Shore Point Productions",
    founder: "Dru Sutton",
    role: "Co-Founder",
    results: "15 Meetings Booked, Multiple Deals Closed",
    problem: "Shore Point Productions only relied on refferals and a bit of LinkedIn outreach with no stable method of client acquisition.",
    solution: "Now they consistently get new leads month after month and have been able to close multiple deals and built a pipeline that keeps growing.",
    videoId: "07RFfrVrACw",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }, {
    company: "CloudSync Pro",
    founder: "Amanda Rodriguez",
    role: "Head of Sales",
    results: "Built an automated outreach system targeting IT directors and CTOs, creating a predictable pipeline with 46 meetings and $315K revenue that scaled their business 3x in 50 days.",
    problem: "Amanda's cloud services team was relying too heavily on referrals and needed a scalable way to generate new business consistently.",
    solution: "We built an automated outreach system targeting IT directors and CTOs, creating a predictable pipeline that scaled their business 3x.",
    videoId: "-8c-oSi9doQ",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  }, {
    company: "FinTech Innovations",
    founder: "David Chen",
    role: "Founder & CEO",
    results: "Developed a targeted approach focusing on innovation leaders at regional banks, resulting in 33 pilot programs and enterprise contracts worth $180K in 40 days.",
    problem: "David's fintech startup needed to break into the traditional banking sector but lacked the network to reach key decision-makers.",
    solution: "We developed a targeted approach focusing on innovation leaders at regional banks, resulting in pilot programs and enterprise contracts.",
    videoId: "NmOsiKcQLQU",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  }];
  return <section id="case-studies" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from <span className="text-primary">Real Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped Agencies, B2B service providers, and SaaS companies consistently book more qualified meetings and close more deals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {cases.map((caseStudy, index) => <Collapsible key={index} open={openCards[index]} onOpenChange={() => toggleCard(index)}>
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <img src={caseStudy.image} alt={caseStudy.founder} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{caseStudy.founder}</h3>
                    <p className="text-sm text-muted-foreground">{caseStudy.role} at {caseStudy.company}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-gradient-subtle rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Results:</h4>
                  <p className="text-muted-foreground">{caseStudy.results}</p>
                </div>

                {/* YouTube Video */}
                <div className="mb-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe src={`https://www.youtube.com/embed/${caseStudy.videoId}`} title={`${caseStudy.founder} - ${caseStudy.company} Case Study`} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </div>

                {/* Snippet - always visible */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.problem.substring(0, 100)}...</p>
                </div>

                <CollapsibleContent className="space-y-4 mb-6">
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Solution & Results:</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                </CollapsibleContent>

                {/* Expand/Collapse Button */}
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className={`w-full transition-colors ${openCards[index] ? 'bg-primary text-primary-foreground shadow-glow' : 'hover:bg-primary hover:text-primary-foreground hover:shadow-glow'}`}>
                    {openCards[index] ? 'Show Less' : 'Read Full Case Study'}
                    {openCards[index] ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                  </Button>
                </CollapsibleTrigger>
              </div>
            </Collapsible>)}
        </div>

      </div>
    </section>;
};
export default CaseStudies;