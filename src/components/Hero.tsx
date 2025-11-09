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
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Tehrim Parveen
          </h1>
          <div className="inline-block px-6 py-2 bg-gradient-accent rounded-full text-white text-lg md:text-xl font-semibold animate-fade-in shadow-soft" style={{ animationDelay: "0.1s" }}>
            Full Stack Developer
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Building innovative web applications that connect people and solve real-world problems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in pt-4" style={{ animationDelay: "0.5s" }}>
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 min-w-[180px] text-base"
            >
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="hover:shadow-soft transition-all duration-300 hover:scale-105 min-w-[180px] text-base"
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
          <div className="mt-16 animate-float">
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
