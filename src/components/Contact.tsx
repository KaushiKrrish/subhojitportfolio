import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/KaushiKrrish" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/subhojit-mohanty-163626193/" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-muted/30">
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
          <form onSubmit={handleSubmit} className="space-y-6 mb-10">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background/50 resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              size="lg"
              variant="primary"
              className="w-full font-semibold"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
          
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-6">Connect with me on:</p>
            <div className="flex justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
                >
                  <social.icon className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Subhojit Mohanty. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
