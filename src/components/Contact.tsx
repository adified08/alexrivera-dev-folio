import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, FileDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:alex.rivera@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                alex.rivera@example.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                /in/alexrivera
              </a>
              <Button
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary mt-4"
                asChild
              >
                <a href="/resume.pdf" download>
                  <FileDown className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
