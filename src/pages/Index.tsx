import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustedBy from "@/components/TrustedBy";
import CaseStudies from "@/components/CaseStudies";
import FreeResources from "@/components/FreeResources";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TrustedBy />
      <CaseStudies />
      <FreeResources />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
