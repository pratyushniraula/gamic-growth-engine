import partnerClay from "@/assets/partner-clay.png";
import partnerAiArk from "@/assets/partner-aiark.jpeg";
import partnerSmartlead from "@/assets/partner-smartlead.png";
import partnerApollo from "@/assets/partner-apollo.png";

const basePartners = [
  { name: "Clay", logo: partnerClay },
  { name: "AI Ark Expert", logo: partnerAiArk },
  { name: "Smartlead Certified Partner", logo: partnerSmartlead },
  { name: "Apollo Partner", logo: partnerApollo },
];

// Duplicate for seamless infinite scroll
const partners = [...basePartners, ...basePartners, ...basePartners];

const CertifiedPartners = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-primary mb-8">
            Certified Partners
          </h2>

          <div className="w-full max-w-5xl mx-auto overflow-hidden">
            <div className="flex animate-scroll gap-12 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-28 w-44 rounded-xl bg-foreground/95 p-4 transition-all duration-300 hover:scale-105 shadow-card"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} certified partner badge`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedPartners;
