import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import petConnectImage from "@/assets/pet-connect.jpg";
import tutorConnectImage from "@/assets/tutor-connect.jpg";
import calculatorImage from "@/assets/calculator.jpg";
import comingSoonImage from "@/assets/coming-soon.jpg";

const projects = [
  {
    title: "Pet-Connect",
    description: "A comprehensive platform connecting pet owners with trusted caretakers. Features include pet listings, advanced search filters, and direct contact with caretakers.",
    tech: ["Python", "Java", "REST API", "SQL", "Responsive Design"],
    image: petConnectImage,
    demo: "#",
    source: "#",
  },
  {
    title: "Tutor-Connect",
    description: "Matchmaking platform for tutors and students. Includes detailed tutor profiles, subject filtering, booking request forms, and rating system.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    image: tutorConnectImage,
    demo: "#",
    source: "#",
  },
  {
    title: "Simple Calculator",
    description: "A clean and functional calculator application with basic arithmetic operations. Features an intuitive interface with responsive design for seamless calculations.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: calculatorImage,
    demo: "#",
    source: "#",
  },
  {
    title: "Coming Soon",
    description: "An exciting new project currently in development. Stay tuned for updates on this upcoming addition to my portfolio.",
    tech: ["TBA"],
    image: comingSoonImage,
    demo: "#",
    source: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border/50 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="default" className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
