import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { QuoteSection } from "./components/sections/QuoteSection";
import { FAQSection } from "./components/sections/FAQSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";
import { SEOHead } from "./components/SEO/SEOHead";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      {/* <ServicesSection /> */}

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}

      {/* Quote Section */}
      <QuoteSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
