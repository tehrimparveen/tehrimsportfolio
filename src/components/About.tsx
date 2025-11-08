export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern, responsive web applications. 
              With a strong foundation in HTML, CSS, JavaScript, Python, and Java, I create solutions that are both 
              elegant and functional.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              My experience spans from frontend development with modern frameworks to backend systems and database management. 
              I specialize in creating platforms that connect people and solve real-world challenges through technology.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Whether it's developing REST APIs, crafting responsive user interfaces, or optimizing database queries, 
              I'm committed to delivering high-quality software that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
