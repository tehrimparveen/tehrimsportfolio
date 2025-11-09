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
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proficient in modern web technologies and frameworks for building scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-1 border border-border/50 group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-accent rounded-xl shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-accent rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-muted-foreground mt-3 text-right">{skill.level}%</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50">
          <p className="text-foreground text-center text-lg leading-relaxed">
            <strong className="text-primary">Additional expertise:</strong> Building open-source alternatives, ethical reverse-engineering 
            for security research with proper authorization, and creating legal software solutions for educational purposes.
          </p>
        </div>
      </div>
    </section>
  );
};
