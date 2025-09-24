// Easy to manage companies list - add/remove companies here
const companies = [
  { name: "Deep Social Brands" },
  { name: "First Rank Digital" },
  { name: "Magnason Films" },
  { name: "Shore Point Productions" },
  { name: "Cashion Marketing" },
  { name: "Art&Ode" },
  { name: "ERA Fit" },
  { name: "Live Media Digital" },
  // Duplicate for seamless loop
  { name: "Deep Social Brands" },
  { name: "First Rank Digital" },
  { name: "Magnason Films" },
  { name: "Shore Point Productions" },
];

const TrustedBy = () => {
  return <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-primary mb-8">
            Trusted by Leading B2B Companies
          </h2>
          
          <div className="w-full max-w-5xl mx-auto overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-14 px-6 rounded-lg bg-blue-100/70 text-primary font-medium text-sm hover:text-primary/80 hover:bg-blue-200/80 transition-all duration-300 hover:scale-105 backdrop-blur-sm dark:bg-blue-900/30 dark:text-primary dark:hover:text-primary/80 dark:hover:bg-blue-800/40 min-w-[200px]">
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl text-muted-foreground italic">
            "Working with you has single-handedly kept my company alive."
          </blockquote>
          <cite className="text-primary font-semibold mt-4 block">— Deepak Sharma, CEO of Deep Social Brands</cite>
        </div>
      </div>
    </section>;
};
export default TrustedBy;