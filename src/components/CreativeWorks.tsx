import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Palette, PenTool, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const creativeItems = [
  {
    title: "UX Research Study",
    category: "Case Studies",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
    comingSoon: true,
  },
  {
    title: "Concept Sketches",
    category: "Visual Sketches",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80",
    comingSoon: false,
  },
  {
    title: "Abstract Series",
    category: "Digital Art",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80",
    comingSoon: false,
  },
  {
    title: "Design Insights",
    category: "Articles",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80",
    comingSoon: true,
  },
];

const CreativeWorks = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleItemClick = () => {
    setShowComingSoon(true);
  };

  return (
    <section id="creative-works" className="min-h-screen flex items-center py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Creative <span className="gradient-text">Works</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--gradient-primary)] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my creative journey through case studies, sketches, digital art, and written articles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creativeItems.map((item, index) => (
            <Card 
              key={index}
              onClick={() => handleItemClick()}
              className="glass-card border-0 hover-glow group animate-scale-in cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-4 pb-5">
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.category}</h3>
                <p className="text-xs text-muted-foreground">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="glass-card border-border/40">
          <DialogHeader>
            <DialogTitle className="text-2xl">Hello There! 👋</DialogTitle>
            <DialogDescription className="text-base pt-2">
              The project is not yet available. Working on it to finish up.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CreativeWorks;
