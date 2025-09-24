import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
];

const TrustedBy = () => {
  return <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-8">
            Trusted by Leading B2B Companies
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              duration: 40,
              skipSnaps: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {companies.map((company, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="flex items-center justify-center h-14 px-6 rounded-lg bg-white/60 text-blue-800 font-medium text-sm hover:text-blue-900 hover:bg-white/80 transition-all duration-300 hover:scale-105 backdrop-blur-sm dark:bg-white/10 dark:text-blue-200 dark:hover:text-blue-100 dark:hover:bg-white/20">
                    {company.name}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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