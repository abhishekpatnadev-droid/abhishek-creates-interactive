import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-glass-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Abhishek Kumar. Crafted with passion and modern technology.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
