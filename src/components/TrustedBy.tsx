// Easy to manage companies list - add/remove companies here
const baseCompanies = [
  { name: "Deep Social Brands" },
  { name: "First Rank Digital" },
  { name: "Magnason Film" },
  { name: "Shore Point Productions" },
  { name: "Cashion Marketing" },
  { name: "Art&Ode" },
  { name: "ERA Fit" },
  { name: "Live Media Digital" },
];

// Create seamless loop by duplicating the array
const companies = [...baseCompanies, ...baseCompanies];

const TrustedBy = () => {
  return <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="eyebrow mb-10">
            Trusted by Leading B2B Companies
          </h2>
          
          <div className="w-full max-w-5xl mx-auto overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-14 px-6 rounded-xl border border-border bg-card text-muted-foreground font-medium text-sm transition-colors duration-200 hover:text-foreground min-w-[200px]">
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-display text-foreground">
            "Working with you has single-handedly kept my company alive."
          </blockquote>
          <cite className="eyebrow mt-6 block not-italic">— Deepak Sharma, CEO of Deep Social Brands</cite>
        </div>
      </div>
    </section>;
};
export default TrustedBy;