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
    <section id="how-we-operate" className="py-24 md:py-32 px-6 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">01 — The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The One Problem Every <span className="text-primary-glow">Financial Firm</span> Has
          </h2>
          <p className="text-lg text-muted-foreground measure mx-auto">
            You are not short on expertise. You are not short on execution. You are short on one thing, a consistent,
            repeatable source of qualified conversations with the right owners at the right time.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, index) => (
            <Reveal
              key={index}
              delay={index * 100}
              className="surface-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Proof */}
        <div className="rounded-2xl border border-border bg-card/50 p-6 md:p-10">
          <p className="eyebrow text-center mb-10">Here's what changes when the origination runs like a system</p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <Reveal className="surface-card p-8">
              <h3 className="text-2xl font-bold mb-1">Sell Side Boutique Group</h3>
              <p className="text-sm text-muted-foreground mb-8">Sell-side M&amp;A boutique, manufacturing</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <CountUpStat value="43" label="Qualified seller leads" className="text-4xl" />
                <CountUpStat value="9" label="Calls booked" className="text-4xl" />
                <CountUpStat value="2" label="Mandates signed" className="text-4xl" />
                <CountUpStat value="1" label="NDA executed" className="text-4xl" />
              </div>

              <p className="eyebrow mb-4">All in under 30 days</p>

              <p className="text-muted-foreground mb-6">
                We sourced lower-middle-market manufacturers around $1M-$5M EBITDA matching the buyer's exact criteria,
                layered in a CFO-hire readiness signal, and positioned the firm as a discreet sell-side advisor running a
                buyer-backed search, not a broker blasting the market.
              </p>

              <a
                href="https://gamma.app/docs/CRR-Case-Study-tptymyf5wjfcc38?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary-glow transition-colors"
              >
                Check out the full breakdown here
              </a>
            </Reveal>

            <Reveal delay={100} className="surface-card p-8">

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
                We skipped LinkedIn and generic data providers and scraped the directories these businesses actually show up on,
                including tournament boards, camp registries, and governing-body listings, then worked backwards to find the named owner
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
              <p className="text-muted-foreground mb-6">PR agencies, $1M-$15M revenue</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary">61</div>
                  <div className="text-sm text-muted-foreground">Leads sourced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">17</div>
                  <div className="text-sm text-muted-foreground">Calls booked</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">In exact niche</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20 Days</div>
                  <div className="text-sm text-muted-foreground">For these results</div>
                </div>
              </div>

              <p className="text-sm font-medium mb-4">All in 20 days.</p>

              <p className="text-muted-foreground mb-4">
                In just 20 days, we targeted PR agencies in a tight, unique niche, enriched each prospect with competitor-firm and
                industry-specific signals, and opened conversations around consolidation and margin pressure, positioning
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
