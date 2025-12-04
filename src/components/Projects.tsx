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

const ProjectsHeader = () => (
  <section id="projects" className="min-h-screen w-full flex items-center justify-center bg-muted/30 px-6 snap-start">
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
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Image Side */}
      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative group">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[40vh] md:h-[60vh] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
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
              className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View Code
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
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
    <>
      <ProjectsHeader />
      {projects.map((project, index) => (
        <ProjectSlide 
          key={index} 
          project={project} 
          index={index} 
          total={projects.length}
        />
      ))}
    </>
  );
};

export default Projects;
