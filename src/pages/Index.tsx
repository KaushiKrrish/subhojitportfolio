import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CreativeWorks from "@/components/CreativeWorks";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <CreativeWorks />
      <Contact />
    </div>
  );
};

export default Index;
