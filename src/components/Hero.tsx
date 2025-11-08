import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Tehrim Parveen
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Full Stack Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Building innovative web applications that connect people and solve real-world problems
        </p>
        <div className="flex gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" onClick={scrollToContact} className="shadow-soft">
            Contact Me
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
        <div className="mt-12 animate-float">
          <ArrowDown className="h-8 w-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};
