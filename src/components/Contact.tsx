import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      console.log("Sending contact email...");
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: validatedData,
      });

      if (error) {
        console.error("Error sending email:", error);
        throw error;
      }

      console.log("Email sent successfully:", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-hover transition-all duration-500 group">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-accent rounded-2xl shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
                  <a 
                    href="mailto:oceanblueyes658@gmail.com" 
                    className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    oceanblueyes658@gmail.com
                  </a>
                  <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                    Best for project inquiries and collaborations
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-hover transition-all duration-500 group">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-accent rounded-2xl shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
                  <a 
                    href="tel:+919831973007" 
                    className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    +91 9831973007
                  </a>
                  <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                    Available for urgent matters
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-card rounded-3xl p-8 md:p-10 shadow-soft border border-border/50 space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-base font-semibold">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-semibold">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                required
                className="resize-none text-base"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-base hover:shadow-hover transition-all duration-300 hover:scale-[1.02]" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
