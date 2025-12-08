import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Github, Linkedin, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; message: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      // Store submitted data for dialog
      setSubmittedData({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      // Show success dialog
      setShowSuccessDialog(true);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
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
            © {new Date().getFullYear()} Subhojit Mohanty.
          </p>
        </footer>
      </div>

      {/* Success Dialog with Backdrop Blur */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md border-none bg-background/80 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 animate-scale-in">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl font-bold gradient-text mb-2">Message Sent!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. A confirmation email has been sent to your inbox.
            </p>
            
            {submittedData && (
              <div className="w-full bg-muted/50 rounded-xl p-4 text-left space-y-3">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Name</span>
                  <p className="font-medium">{submittedData.name}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email</span>
                  <p className="font-medium">{submittedData.email}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Message</span>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{submittedData.message}</p>
                </div>
              </div>
            )}
            
            <Button 
              onClick={() => setShowSuccessDialog(false)} 
              variant="primary" 
              className="mt-6 w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
