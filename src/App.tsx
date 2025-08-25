import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CTASection />
      </main>
      
      <Footer />
      
      <ScrollToTopButton />
    </div>
  );
}