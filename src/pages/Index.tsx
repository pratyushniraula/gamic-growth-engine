import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import TrustedBy from "@/components/TrustedBy";
import CertifiedPartners from "@/components/CertifiedPartners";
import CaseStudies from "@/components/CaseStudies";
import FreeResources from "@/components/FreeResources";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CertifiedPartners />
      <AboutSection />
      <SolutionSection />
      <ProcessSection />
      <TrustedBy />
      <CaseStudies />
      <FAQSection />
      <FreeResources />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
