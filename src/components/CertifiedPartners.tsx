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
    <section className="py-12 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-8">
          Certified Partners
        </h2>

        <div
          className="w-full max-w-6xl mx-auto overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex animate-scroll gap-16 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-40 w-56 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} certified partner badge`}
                  className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedPartners;
