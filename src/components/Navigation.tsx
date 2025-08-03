import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold text-foreground">Gamic Media</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-we-operate" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Process
          </a>
          <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </a>
          <a href="https://youtube.com/@gamicmedia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            YouTube
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