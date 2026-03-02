import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="mesh-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
