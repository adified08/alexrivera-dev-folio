import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-accent opacity-50"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Building the Future, One Line of Code at a Time
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-stack developer specializing in{" "}
            <span className="text-primary font-semibold">React</span>,{" "}
            <span className="text-primary font-semibold">Node.js</span>, and{" "}
            <span className="text-primary font-semibold">AWS</span>
          </p>
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_40px_hsl(195_100%_50%/0.5)] transition-all duration-300 animate-glow"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
