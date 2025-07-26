import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">Gamic</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Process
          </a>
          <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Results
          </a>
        </div>
        
        <Button variant="premium" size="lg">
          Book Strategy Call
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;