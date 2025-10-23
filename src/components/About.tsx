const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over <span className="text-primary font-semibold">5 years of experience</span> in full-stack development, 
              I've had the privilege of working on diverse projects ranging from e-commerce platforms to AI-powered applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in creating <span className="text-primary font-semibold">innovative, scalable applications</span> that 
              solve real-world problems. I believe in writing clean, maintainable code and staying current with the latest 
              technologies to deliver exceptional results for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
