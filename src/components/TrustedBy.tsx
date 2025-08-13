const TrustedBy = () => {
  const logos = ["TechScale Pro", "SalesForce Solutions", "DataDriven Inc", "GrowthLabs", "B2B Dynamics", "CloudVenture", "ScaleUp Systems", "Revenue Rocket"];
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by Leading B2B Companies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {logos.map((logo, index) => <div key={index} className="flex items-center justify-center h-12 px-4 text-muted-foreground font-medium text-sm hover:text-foreground transition-colors opacity-60 hover:opacity-100">
                {logo}
              </div>)}
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