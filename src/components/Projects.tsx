import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import gravidaCareCover from "@/assets/gravida-care-cover.png";
import vrikshaCover from "@/assets/vriksha-cover.png";

const projects = [
  {
    title: "Gravida Care",
    description: "To monitor and make an Interactive interface for pregnant women to detect their emotional issues and suggest corresponding solutions (such as educational, nutrition, medications etc) or consultation to the doctor. Woman health prediction through Machine Learning models to predict symptoms, clinical problems, and respective solutions.",
    tags: ["React", "TypeScript"],
    image: gravidaCareCover,
    liveUrl: "https://gravidacare.vercel.app/",
    githubUrl: "https://github.com/KaushiKrrish/Gravidacareapp.git",
  },
  {
    title: "Vriksha Blossom Display",
    description: "An interactive visual experience that simulates falling blossoms and natural trees. The project focuses on generative art, smooth animations, and user interaction—allowing users to create blossom clusters, adjust bloom size, and explore dynamic visual patterns. Designed as a lightweight, browser-based application, it showcases creativity, aesthetic detailing, and an understanding of interactive graphics programming.",
    tags: ["p5.js", "HTML5", "JavaScript"],
    image: vrikshaCover,
    liveUrl: "https://vrikshablossom.vercel.app/",
    githubUrl: "https://github.com/KaushiKrrish/vriksha-blossom-display.git",
  },
];

const ProjectsHeader = () => (
  <section className="min-h-screen w-full flex items-center justify-center bg-muted/30 px-6 snap-start">
    <div className="text-center animate-fade-in-up">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Here are some of my recent works that showcase my skills and passion for development
      </p>
      <div className="mt-8 animate-bounce">
        <span className="text-muted-foreground text-sm">Scroll to explore</span>
      </div>
    </div>
  </section>
);

const ProjectSlide = ({ project, index, total }: { project: typeof projects[0]; index: number; total: number }) => (
  <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden snap-start">
    {/* Background Image */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Image Side */}
      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
          <img 
            src={project.image} 
            alt={project.title}
            className={`relative w-full h-[40vh] md:h-[60vh] rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ${
              project.title === "Gravida Care" ? "object-contain bg-card" : "object-cover"
            }`}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
        </div>
      </div>

      {/* Text Side */}
      <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          Project {index + 1} of {total}
        </div>
        
        <h3 className="text-3xl md:text-5xl font-bold">{project.title}</h3>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View Code
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)]"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  return (
    <div id="projects" className="snap-y snap-mandatory h-screen overflow-y-auto">
      <ProjectsHeader />
      {projects.map((project, index) => (
        <ProjectSlide 
          key={index} 
          project={project} 
          index={index} 
          total={projects.length}
        />
      ))}
    </div>
  );
};

export default Projects;
