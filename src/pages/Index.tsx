import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CreativeWorks from "@/components/CreativeWorks";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen snap-y snap-mandatory h-screen overflow-y-auto">
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <Projects />
      <div className="snap-start">
        <CreativeWorks />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
