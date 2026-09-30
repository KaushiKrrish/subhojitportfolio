import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import gravidaCareCover from "@/assets/gravida-care-cover.png";
import vrikshaCover from "@/assets/vriksha-cover.png";
import rideForwardCover from "@/assets/ride-forward-cover.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Ride Forward",
    description: "Designed an inclusive eco-friendly transport-sharing platform using user research, personas, journey mapping, and accessible UI to simplify sustainable mobility.",
    tags: ["Figma"],
    image: rideForwardCover,
    liveUrl: "https://www.figma.com/proto/8NGRpLGGAhqvvFf1CUxvp6/IxD-Work?node-id=0-1&t=CbO7pCbmwE2plHR7-1",
    githubUrl: "",
  },
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

const ProjectCard = ({ project, index, total }: { project: typeof projects[0]; index: number; total: number }) => (
  <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
    {/* Image Side */}
    <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
        <img 
          src={project.image} 
          alt={project.title}
          className={`relative w-full h-[300px] md:h-[400px] rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ${
            project.title === "Gravida Care" ? "object-contain bg-card" : "object-cover"
          }`}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </div>

    {/* Text Side */}
    <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
      <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
        Project {index + 1} of {total}
      </div>
      
      <h3 className="text-2xl md:text-4xl font-bold">{project.title}</h3>
      
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span 
            key={i}
            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        {project.githubUrl && (
          <Button
            size="default"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
        )}
        <Button 
          size="default" 
          className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)]"
          onClick={() => window.open(project.liveUrl, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </Button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for development
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <ProjectCard 
                  project={project} 
                  index={index} 
                  total={projects.length}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary/20" />
            <CarouselNext className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
