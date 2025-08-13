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
    image: "/faces/DEEP.jpeg"
  }, {
    company: "First Rank Digital",
    founder: "Rene Ramirez",
    role: "COO",
    results: "70+ meetings booked, 13 clients signed",
    problem: "First Rank Digital relied on cold calls to get leads and book meetings. While it did work, it required a lot of manual effort to keep their pipeline full.",
    solution: "Since partnering with us, they\'ve consistently filled their calendar with new leads. With automated lead generation, they\'ve signed multiple new clients while saving their time and resources for more strategic tasks.",
    videoId: "mKgSmpGUS-4",
    image: "/faces/Rene.jpeg"
  }, {
    company: "Magnasan Films",
    founder: "Mathias Magnasan",
    role: "Founder",
    results: "25 meetings booked, 3 deals closed",
    problem: "Magnason Film purely relied on their previous work to get new clients but it wasn't a reliable method of client acquisition.",
    solution: "Since working with us, they've been getting a steady flow of leads every month and closed 3 new deals, including a dream client who plans to work with them for life!",
    videoId: "Fkst4al5y-Q",
    image: "/faces/Mathias.jpeg"
  }, {
    company: "Shore Point Productions",
    founder: "Dru Sutton",
    role: "Co-Founder",
    results: "15 Meetings Booked, Multiple Deals Closed",
    problem: "Shore Point Productions only relied on refferals and a bit of LinkedIn outreach with no stable method of client acquisition.",
    solution: "Now they consistently get new leads month after month and have been able to close multiple deals and built a pipeline that keeps growing.",
    videoId: "07RFfrVrACw",
    image: "/faces/DruFCe.jpeg"
  }, {
    company: "Cashion Marketing",
    founder: "Hayden Cashion",
    role: "CEO",
    results: "30+ meetings booked, multiple deals closed",
    problem: "Cashion Marketing depended only on referrals to get new clients. It worked, but it was unpredictable and made it hard to keep a steady flow of deals.",
    solution: "After working with us, they now get qualified leads every month from cold email. They've booked over 30 meetings and closed mutliple deals and are now able to scale their business predictably.",
    videoId: "-8c-oSi9doQ",
    image: "/faces/HaydenCashion.jpeg"
  }, {
    company: "Art & Ode",
    founder: "Aziz Rawat",
    role: "Founder",
    results: "20 meetings booked, 3 meetings closed.",
    problem: "Art & Ode was a startup who were looking for new ways to get in front of their ideal customers without breaking the bank on advertising",
    solution: "Since working with us, they've consistently been able to get meetings month after month, scaled their business from the ground up, and fill out their entire sales pipeline with their ideal prospects.",
    videoId: "NmOsiKcQLQU",
    image: "/faces/Aziz.jpeg"
  }];
  return <section id="case-studies" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from <span className="text-primary">Real Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how we've helped B2B companies consistently book qualified meetings and close deals.
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