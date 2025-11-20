import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import gravidaCareLogo from "@/assets/gravida-care-logo.png";

const projects = [
  {
    title: "Gravida Care",
    description: "To monitor and make an Interactive interface for pregnant women to detect their emotional issues and suggest corresponding solutions (such as educational, nutrition, medications etc) or consultation to the doctor. Woman health prediction through Machine Learning models to predict symptoms, clinical problems, and respective solutions.",
    tags: ["React", "TypeScript"],
    image: gravidaCareLogo,
    liveUrl: "https://www.figma.com/make/V6cHxt9qIEzZt16CKqErYE/Gravida-Care-App?node-id=0-4&t=9htrZiQ99D6L8tNo-1",
    githubUrl: "https://github.com/KaushiKrrish/Gravidacareapp",
  },
  {
    title: "Vriksha Blossom Display",
    description: "An interactive visual experience that simulates falling blossoms and natural trees. The project focuses on generative art, smooth animations, and user interaction—allowing users to create blossom clusters, adjust bloom size, and explore dynamic visual patterns. Designed as a lightweight, browser-based application, it showcases creativity, aesthetic detailing, and an understanding of interactive graphics programming.",
    tags: ["p5.js", "HTML5", "JavaScript"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/KaushiKrrish/vriksha-blossom-display.git",
  },
  {
    title: "Project Three",
    description: "Mobile-first social media application with real-time messaging and content sharing capabilities.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--gradient-primary)] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 hover-glow overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-[var(--gradient-primary)] hover:opacity-90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
