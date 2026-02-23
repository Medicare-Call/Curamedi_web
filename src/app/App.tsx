import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { IdentitySection } from "./components/IdentitySection";
import { ProblemSection } from "./components/ProblemSection";
import { ProductSection } from "./components/ProductSection";
import { TechnologySection } from "./components/TechnologySection";
import { TractionSection } from "./components/TractionSection";
import { BusinessVisionSection } from "./components/BusinessVisionSection";
import { FounderSection } from "./components/FounderSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IdentitySection />
      <ProblemSection />
      <ProductSection />
      <TechnologySection />
      <TractionSection />
      <BusinessVisionSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
