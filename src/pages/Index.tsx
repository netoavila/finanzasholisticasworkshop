import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ShiftSection from "@/components/landing/ShiftSection";
import ContentSection from "@/components/landing/ContentSection";
import ResultsSection from "@/components/landing/ResultsSection";
import FacilitatorsSection from "@/components/landing/FacilitatorsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import PricingPreviewSection from "@/components/landing/PricingPreviewSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyCTA from "@/components/landing/StickyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection />
      <ProblemSection />
      <ShiftSection />
      <ContentSection />
      <ResultsSection />
      <FacilitatorsSection />
      <AudienceSection />
      <PricingPreviewSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
