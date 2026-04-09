import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="mesh-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
