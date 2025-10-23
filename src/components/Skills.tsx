const skills = {
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  "Tools": ["Git", "Docker", "AWS", "Figma", "VS Code"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Agile", "Leadership"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--gradient-primary)] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div 
              key={category} 
              className="glass-card p-8 rounded-3xl hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
