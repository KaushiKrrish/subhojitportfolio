const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--gradient-primary)] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-3xl hover-glow animate-scale-in">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an Industrial Design Engineering student interested in UI/UX design and digital product development. I enjoy understanding user needs and turning ideas into simple, useful, and intuitive digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I like exploring new tools, learning through projects, and finding practical ways to improve how people interact with digital products.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-3xl hover-glow animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="text-muted-foreground">Design clean and user-friendly interfaces for web and mobile applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <span className="text-muted-foreground">Use user research and feedback to understand design problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="text-muted-foreground">Create wireframes, prototypes, and user flows.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <span className="text-muted-foreground">Apply design principles to improve usability and accessibility.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
