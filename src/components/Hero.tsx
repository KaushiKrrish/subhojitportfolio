import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

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
      
      <div className="relative z-10 max-w-7xl mx-auto animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Subhojit Mohanty</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Creative Developer & Designer crafting beautiful digital experiences
            </p>
            
            <div className="flex gap-4 mb-12">
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
          
          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-2 bg-[var(--gradient-primary)] rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-1 bg-[var(--gradient-primary)] rounded-3xl opacity-40"></div>
              <img 
                src={profileImage}
                alt="Subhojit Mohanty - Profile"
                className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl object-cover border-[3px] border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
