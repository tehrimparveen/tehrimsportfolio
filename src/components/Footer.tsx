export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            © {currentYear} Tehrim Parveen. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a 
              href="mailto:tehrimparveen25@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              tehrimparveen25@gmail.com
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="tel:+919831973007" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 98319 73007
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
