import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gamicLogo from "@/assets/gamic-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-xl border-b border-border z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          aria-label="Gamic Media — go to homepage"
        >
          <img src={gamicLogo} alt="Gamic Media Logo" className="w-10 h-10 rounded-lg object-contain" />
          <span className="text-xl font-display font-bold text-foreground">Gamic Media</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#how-we-operate" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary-glow transition-colors">
            Our Process
          </Link>
          <Link to="/#case-studies" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary-glow transition-colors">
            Case Studies
          </Link>
          <a href="/resources" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary-glow transition-colors">
            Free Playbooks
          </a>
          <a href="https://www.youtube.com/@AryanAryal3" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary-glow transition-colors">
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