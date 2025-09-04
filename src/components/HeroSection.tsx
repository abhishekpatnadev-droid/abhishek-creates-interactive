import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient animate-gradient opacity-20" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 glass-card rounded-full float-animation opacity-30" />
      <div className="absolute bottom-32 right-20 w-24 h-24 glass-card rounded-lg float-animation opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 glass-card rounded-full float-animation opacity-25" style={{ animationDelay: '4s' }} />
      
      <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="hero-text glow-pulse">Abhishek</span>
              <br />
              <span className="hero-text">Kumar</span>
            </h1>
            <div className="h-1 w-32 mx-auto hero-gradient rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Developer crafting innovative 
            <span className="text-accent font-semibold"> mobile apps</span> and 
            <span className="text-primary-glow font-semibold"> websites</span> that transform education and beyond
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
            <div className="glass-card p-4 rounded-lg hover-lift">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="glass-card p-4 rounded-lg hover-lift">
              <div className="text-2xl font-bold text-primary-glow">3+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="glass-card p-4 rounded-lg hover-lift">
              <div className="text-2xl font-bold text-secondary">10+</div>
              <div className="text-sm text-muted-foreground">Schools</div>
            </div>
            <div className="glass-card p-4 rounded-lg hover-lift">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="glass-button px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button p-3"
                onClick={() => window.open('mailto:abhishek.patna.dev@gmail.com')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button p-3"
                onClick={() => window.open('tel:7979708232')}
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button p-3"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;