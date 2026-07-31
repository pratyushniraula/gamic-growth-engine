import { useState } from "react";
import { AlertTriangle, Repeat, UserMinus, X } from "lucide-react";
import peEmailReach from "@/assets/pe-email-reach.png.asset.json";

const AboutSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const problems = [
    {
      icon: <Repeat className="h-6 w-6" aria-hidden="true" />,
      title: "Referrals don't scale",
      description:
        "Your pipeline depends on who you happen to know. Some quarters produce mandates, some don't, and you can't forecast either.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" aria-hidden="true" />,
      title: "Generic outreach gets ignored",
      description:
        "Untargeted \"have you considered selling\" messages get 80%+ ignored, and put your firm's reputation at risk with every send.",
    },
    {
      icon: <UserMinus className="h-6 w-6" aria-hidden="true" />,
      title: "A BD hire is a six-figure bet",
      description:
        "A full-time analyst costs $80K+ before a single qualified conversation, with zero guarantee on mandate flow.",
    },
  ];

  return (
    <section id="how-we-operate" className="pt-20 pb-12 px-4 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The One Problem Every <span className="text-primary">Financial Firm</span> Has
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You are not short on expertise. You are not short on execution. You are short on one thing, a consistent,
            repeatable source of qualified conversations with the right owners at the right time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Proof */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 shadow-sm transition-shadow hover:shadow-xl">
          <p className="text-center text-lg font-medium mb-8">
            Here's what changes when the origination runs like a system.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="bg-card rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-1">Sell Side Boutique Group</h3>
              <p className="text-muted-foreground mb-6">Sell-side M&amp;A boutique, manufacturing</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary">43</div>
                  <div className="text-sm text-muted-foreground">Qualified seller leads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">9</div>
                  <div className="text-sm text-muted-foreground">Calls booked</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Mandates signed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">NDA executed</div>
                </div>
              </div>

              <p className="text-sm font-medium mb-4">All in under 30 days.</p>

              <p className="text-muted-foreground mb-4">
                We sourced lower-middle-market manufacturers around $1M–$5M EBITDA matching the buyer's exact criteria,
                layered in a CFO-hire readiness signal, and positioned the firm as a discreet sell-side advisor running a
                buyer-backed search, not a broker blasting the market.
              </p>

              <a
                href="https://gamma.app/docs/CRR-Case-Study-tptymyf5wjfcc38?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Check out the full breakdown here
              </a>
            </div>

            <div className="bg-card rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-1">Private Equity Firm</h3>
              <p className="text-muted-foreground mb-6">Youth sports programs, $1M+ revenue</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary">1,435</div>
                  <div className="text-sm text-muted-foreground">Owners contacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">198</div>
                  <div className="text-sm text-muted-foreground">Replies received</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">66</div>
                  <div className="text-sm text-muted-foreground">Interested owners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1 in 22</div>
                  <div className="text-sm text-muted-foreground">Positive response rate</div>
                </div>
              </div>

              <p className="text-sm font-medium mb-4">Founder-run camps, tournaments, and travel teams.</p>

              <p className="text-muted-foreground mb-4">
                The client buys founder-run youth sports businesses, but the owners were invisible to normal B2B databases.
                We skipped LinkedIn and generic data providers and scraped the directories these businesses actually show up on
                — tournament boards, camp registries, and governing-body listings — then worked backwards to find the named owner
                and verified every address before outreach.
              </p>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="block w-full text-left group"
                aria-label="Open email results screenshot"
              >
                <img
                  src={peEmailReach.url}
                  alt="Email campaign results: 1,435 owners contacted, 198 replies, 66 interested"
                  className="w-full rounded-lg border shadow-sm group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </button>
            </div>

            <div className="bg-card rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-1">Sell-Side Advisory Firm</h3>
              <p className="text-muted-foreground mb-6">PR agencies, $1M–$15M revenue</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary">61</div>
                  <div className="text-sm text-muted-foreground">Leads sourced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20</div>
                  <div className="text-sm text-muted-foreground">Days to first conversations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">In exact niche</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$1M–$15M</div>
                  <div className="text-sm text-muted-foreground">Revenue band targeted</div>
                </div>
              </div>

              <p className="text-sm font-medium mb-4">All in 20 days.</p>

              <p className="text-muted-foreground mb-4">
                We targeted PR agencies in a tight, unique niche, enriched each prospect with competitor-firm and
                industry-specific signals, and opened conversations around consolidation and margin pressure — positioning
                the firm as a trusted advisor with a no-pressure valuation conversation, not a broker.
              </p>

              <a
                href="https://gamma.app/docs/GOP-e6ddtp51jograal?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Check out the full breakdown here
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">Reference available on request.</p>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close screenshot"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={peEmailReach.url}
            alt="Email campaign results: 1,435 owners contacted, 198 replies, 66 interested"
            className="max-h-full max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AboutSection;
