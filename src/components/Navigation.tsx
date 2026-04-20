import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gamicLogo from "@/assets/gamic-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" aria-label="Gamic Media — go to homepage">
          <img src={gamicLogo} alt="Gamic Media Logo" className="w-10 h-10 rounded-lg object-contain" />
          <span className="text-xl font-bold text-foreground">Gamic Media</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#how-we-operate" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Process
          </a>
          <a href="/#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </a>
          <a href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
            Free Playbooks
          </a>
          <a href="https://www.youtube.com/@AryanAryal3" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            YouTube
          </a>
        </div>
        
        <Button asChild variant="premium" size="lg">
          <a
            href="https://calendly.com/gamicmedia/discovery-call-clone?"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a strategy call on Calendly"
          >
            Book Strategy Call
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;