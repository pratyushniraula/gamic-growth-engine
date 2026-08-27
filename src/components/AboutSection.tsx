import { AlertTriangle, Repeat, UserMinus } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUpStat from "@/components/CountUpStat";

const AboutSection = () => {
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
            {/* Card 1 — Carrara Strategy Group */}
            <Reveal className="surface-card p-8 flex flex-col h-full">
              <div className="mb-6">
                <img
                  src="/images/carrara-logo.png"
                  alt="Carrara Strategy Group"
                  className="h-8 w-auto object-contain mb-3"
                />
                <h3 className="text-2xl font-bold mb-1">Carrara Strategy Group</h3>
                <p className="text-sm text-muted-foreground">Sell-side M&amp;A, lower-middle-market manufacturing</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <CountUpStat value="130" label="Interested seller leads" className="text-4xl" />
                <CountUpStat value="54" label="Conversations booked" className="text-4xl" />
                <CountUpStat value="2" label="Mandates signed" className="text-4xl" />
                <CountUpStat value="$10-20MM" label="Transaction in diligence" className="text-4xl" />
              </div>

              <p className="eyebrow mb-4">90 days — Memorial Day to Labor Day</p>

              <p className="text-muted-foreground mb-6">
                We sourced manufacturers at $1M-$5M EBITDA matching the buyer's exact criteria, layered in a CFO-hire
                readiness signal, and positioned Carrara as a discreet sell-side advisor running a buyer-backed search,
                not a broker blasting the market.
              </p>

              <div className="border-t border-primary/10 my-6" />

              <div className="flex items-start gap-4 mb-6">
                <img
                  src="/images/marco-barone.jpg"
                  alt="Marco Barone, Managing Partner at Carrara Strategy Group"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-xl md:text-[1.25rem] italic text-primary-glow mb-2">"The calendar is full."</p>
                  <p className="eyebrow text-muted-foreground">Marco Barone — Managing Partner, Carrara Strategy Group</p>
                </div>
              </div>

              <a
                href="https://gamma.app/docs/CRR-Case-Study-tptymyf5wjfcc38?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-primary font-medium hover:text-primary-glow transition-colors"
              >
                Check out the full breakdown here
              </a>
            </Reveal>

            {/* Card 2 — Private Equity Firm */}
            <Reveal delay={100} className="surface-card p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-1">Private Equity Firm</h3>

              <p className="text-sm text-muted-foreground mb-8">Youth sports programs, $1M+ revenue</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <CountUpStat value="4,724" label="Owners built" className="text-4xl" />
                <CountUpStat value="172" label="Interested owners" className="text-4xl" />
                <CountUpStat value="140" label="Disqualified by us" className="text-4xl" />
                <CountUpStat value="5" label="NDAs signed" className="text-4xl" />
              </div>

              <p className="eyebrow mb-4">43 days</p>

              <p className="text-muted-foreground mb-6">
                The client buys founder-run youth sports businesses, but the owners were invisible to standard B2B
                databases. We skipped LinkedIn and generic providers, scraped the directories these businesses actually
                appear on, including tournament boards, camp registries, and governing-body listings, then worked
                backwards to the named owner and verified every address before outreach. Of the 172 owners who came back
                interested, we screened out 140 before a partner ever saw a name.
              </p>

              <a
                href="https://gamma.app/docs/GGC-Case-Study-ezhol9boggylm63?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-primary font-medium hover:text-primary-glow transition-colors"
              >
                Check out the full breakdown here
              </a>
            </Reveal>

            {/* Card 3 — Sell-Side Advisory Firm */}
            <Reveal delay={200} className="surface-card p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-1">Sell-Side Advisory Firm</h3>
              <p className="text-sm text-muted-foreground mb-8">PR agencies, $1M-$15M revenue</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <CountUpStat value="61" label="Leads sourced" className="text-4xl" />
                <CountUpStat value="17" label="Calls booked" className="text-4xl" />
                <CountUpStat value="$300K-$800K" label="In potential advisory fees" className="text-4xl" />
                <CountUpStat value="20" label="Days" className="text-4xl" />
              </div>

              <p className="eyebrow mb-4">All in 20 days</p>

              <p className="text-muted-foreground mb-6">
                In just 20 days, we targeted PR agencies in a tight, unique niche, enriched each prospect with competitor-firm and
                industry-specific signals, and opened conversations around consolidation and margin pressure, positioning
                the firm as a trusted advisor with a no-pressure valuation conversation, not a broker.
              </p>

              <a
                href="https://gamma.app/docs/GOP-e6ddtp51jograal?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-primary font-medium hover:text-primary-glow transition-colors"
              >
                Check out the full breakdown here
              </a>
            </Reveal>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutSection;
