import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--gradient-primary)] mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="glass-card p-12 rounded-3xl hover-glow animate-scale-in">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
              >
                <social.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="bg-[var(--gradient-primary)] hover:opacity-90 text-white font-semibold px-8"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </Button>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
