import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and real-time analytics built with React and Node.js.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
  },
  {
    title: "AI Chatbot Assistant",
    description: "Intelligent conversational AI powered by GPT-4, featuring context awareness, multi-language support, and seamless integration.",
    tech: ["Python", "OpenAI API", "React", "FastAPI"],
    github: "https://github.com",
  },
  {
    title: "Mobile Game Portal",
    description: "Cross-platform gaming hub with leaderboards, social features, and cloud save functionality using React Native and Firebase.",
    tech: ["React Native", "Firebase", "TypeScript", "Redux"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-glow group">
                      <CardHeader>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-primary hover:bg-primary/90"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 hover:bg-primary/10" />
            <CarouselNext className="border-primary/50 hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
