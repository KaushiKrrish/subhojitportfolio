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
              I'm an enthusiastic developer who enjoys building stunning, useful websites and applications. With my knowledge of contemporary web technologies, I use well-thought design and clean code to make concepts come to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I like to explore new technologies, contribute to creative projects, and share my knowledge with the developer community.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-3xl hover-glow animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="text-muted-foreground">Create cutting-edge, responsive designs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <span className="text-muted-foreground">Make user interfaces and experiences that are easy to use</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="text-muted-foreground">Put scalable design solutions into practice</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <span className="text-muted-foreground">Boost accessibility and performance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
