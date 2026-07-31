import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import gamicLogo from "@/assets/gamic-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <img src={gamicLogo} alt="Gamic Media Logo" className="w-10 h-10 rounded-lg object-contain" />
              <span className="text-xl font-display font-bold text-foreground">Gamic Media</span>
            </div>

            <nav
              className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground mb-4"
              aria-label="Footer navigation"
            >
              <a href="/#how-we-operate" className="hover:text-primary-glow transition-colors">
                Our Process
              </a>
              <span aria-hidden="true">·</span>
              <a href="/#case-studies" className="hover:text-primary-glow transition-colors">
                Case Studies
              </a>
              <span aria-hidden="true">·</span>
              <a href="/resources" className="hover:text-primary-glow transition-colors">
                Free Playbooks
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.youtube.com/@AryanAryal3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-glow transition-colors"
              >
                YouTube
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://calendly.com/gamicmedia/discovery-call-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-glow transition-colors"
              >
                Book Strategy Call
              </a>
            </nav>

            <p className="text-sm text-muted-foreground mb-6">
              <a href="mailto:aryan@gamicmedia.com" className="hover:text-primary-glow transition-colors">
                aryan@gamicmedia.com
              </a>
            </p>

            <p className="text-muted-foreground mb-6 measure">
              Gamic Media — The deal origination and outbound desk for M&A advisors, investment banks, and B2B
              agencies. Signal-based outreach under your brand, qualified by real people, booked onto your calendar.
            </p>
            <nav className="flex justify-end items-center gap-5 mt-6 w-full" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/aryan-aryal-0b1b60256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="inline-flex"
              >
                <FaLinkedin size={24} className="text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@AryanAryal3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube"
                className="inline-flex"
              >
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">YouTube</span>
              </a>
            </nav>
            <Button asChild variant="premium" className="mt-6">
              <a
                href="https://calendly.com/gamicmedia/discovery-call-clone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your strategy call on Calendly"
              >
                Book Your Strategy Call
              </a>
            </Button>
          </div>

          {/* Links */}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="eyebrow">© 2026 Gamic Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
