export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              I'm a passionate <span className="font-bold text-primary">Full Stack Developer</span> with expertise in building modern, responsive web applications. 
              With a strong foundation in HTML, CSS, JavaScript, Python, and Java, I create solutions that are both 
              elegant and functional.
            </p>
            <p className="text-xl text-foreground leading-relaxed">
              Currently, I'm a student at <span className="font-semibold">St. John's Diocesan Girls H.S School</span>, studying in class 12th. 
              Alongside my academics, I have developed a strong passion for technology and software development, 
              creating platforms that connect people and solve real-world challenges.
            </p>
            <p className="text-xl text-foreground leading-relaxed">
              My experience spans from frontend development with modern frameworks to backend systems and database management. 
              I specialize in building user-friendly applications that make a meaningful impact.
            </p>
            <p className="text-xl text-foreground leading-relaxed">
              Whether it's developing REST APIs, crafting responsive user interfaces, or optimizing database queries, 
              I'm committed to delivering high-quality software that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
