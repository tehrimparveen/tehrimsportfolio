import { Code2, Database, Globe, Server, Palette, Shield } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 90, icon: Palette },
  { name: "JavaScript", level: 85, icon: Code2 },
  { name: "Python", level: 88, icon: Server },
  { name: "Java", level: 82, icon: Code2 },
  { name: "Responsive Design", level: 92, icon: Globe },
  { name: "REST APIs", level: 85, icon: Server },
  { name: "SQL & Databases", level: 80, icon: Database },
  { name: "Security Best Practices", level: 78, icon: Shield },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proficient in modern web technologies and frameworks for building scalable applications
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-card rounded-xl p-6 shadow-soft">
          <p className="text-foreground text-center">
            <strong>Additional expertise:</strong> Building open-source alternatives, ethical reverse-engineering 
            for security research with proper authorization, and creating legal software solutions for educational purposes.
          </p>
        </div>
      </div>
    </section>
  );
};
