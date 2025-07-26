import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ProcessSection from "@/components/ProcessSection";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustedBy />
      <ProcessSection />
      <CaseStudies />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
