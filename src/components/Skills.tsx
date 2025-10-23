import { Code2, Database, Layers, Server } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML/CSS/JS", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Python", "Express", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    icon: Layers,
    title: "Cloud & Tools",
    items: ["AWS", "Docker", "Git", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
