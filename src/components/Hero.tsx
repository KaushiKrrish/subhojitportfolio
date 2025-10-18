import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[var(--gradient-background)] opacity-50" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 text-center max-w-4xl animate-fade-in-up">
        {/* Profile Image - Replace src with your own image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-[var(--gradient-primary)] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
              alt="Your Name - Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Creative Developer & Designer crafting beautiful digital experiences
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-[var(--gradient-primary)] hover:opacity-90 text-white font-semibold px-8"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10 font-semibold px-8"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
        
        <button 
          onClick={() => scrollToSection("about")}
          className="animate-bounce inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
