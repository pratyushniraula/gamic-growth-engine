import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">Gamic Media</span>
            </div>
            <p className="text-muted-foreground mb-6 w-full max-w-none">
              The premium outbound lead generation agency for B2B service providers and SaaS companies. We use a mixture of AI outbound tools to book you qualified meetings on autopilot.
            </p>
            <nav className="flex justify-end items-center gap-5 mt-6 w-full" aria-label="Social links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="inline-flex"
              >
                <FaLinkedin size={24} className="text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/"
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
          <p className="text-muted-foreground text-sm">
            © 2025 Gamic Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;