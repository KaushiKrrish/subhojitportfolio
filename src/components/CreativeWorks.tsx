import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Palette, PenTool, BookOpen } from "lucide-react";

const categories = [
  {
    title: "Case Studies",
    description: "In-depth analysis of design problems and solutions",
    icon: FileText,
    items: [
      { title: "UX Research Study", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
      { title: "Product Analysis", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
    ]
  },
  {
    title: "Visual Sketches",
    description: "Hand-drawn concepts and wireframes",
    icon: PenTool,
    items: [
      { title: "App Wireframes", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80" },
      { title: "Concept Sketches", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80" },
    ]
  },
  {
    title: "Digital Art",
    description: "Creative digital illustrations and artwork",
    icon: Palette,
    items: [
      { title: "Abstract Series", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80" },
      { title: "Digital Portraits", image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&q=80" },
    ]
  },
  {
    title: "Articles",
    description: "Written pieces on design and technology",
    icon: BookOpen,
    items: [
      { title: "Design Trends 2024", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80" },
      { title: "Tech Insights", image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&q=80" },
    ]
  },
];

const CreativeWorks = () => {
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
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card border-0 hover-glow group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription className="text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item, i) => (
                    <div 
                      key={i}
                      className="relative aspect-square rounded-lg overflow-hidden group/item"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-2">
                        <span className="text-xs font-medium text-foreground">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWorks;
