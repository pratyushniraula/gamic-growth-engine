import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

import playbookColdEmail from "@/assets/playbook-cold-email.jpg";
import playbookLeadGen from "@/assets/playbook-lead-gen.jpg";
import playbookSalesPipeline from "@/assets/playbook-sales-pipeline.jpg";
import playbookCopywriting from "@/assets/playbook-copywriting.jpg";
import playbookScaling from "@/assets/playbook-scaling.jpg";

const categories = ["All", "Cold Outreach", "Lead Generation", "Sales", "Copywriting", "Growth"] as const;
type Category = (typeof categories)[number];

interface Playbook {
  title: string;
  description: string;
  category: Category;
  image: string;
  pages: number;
  slug: string;
}

const playbooks: Playbook[] = [
  {
    title: "The Ultimate Cold Email Playbook in 2026",
    description:
      "The complete 2026 guide to cold email that actually gets replies. Covers deliverability, AI-powered personalization at scale, and multi-channel sequencing built for today's inbox filters.",
    category: "Cold Outreach",
    image: playbookColdEmail,
    pages: 48,
    slug: "ultimate-cold-email-2026",
  },
  {
    title: "The Local Lead Gen Cold Outreach Playbook",
    description:
      "How to find and close local business clients using cold outreach. Includes proven scripts and targeting strategies for HVAC, dental, legal, and home service niches.",
    category: "Lead Generation",
    image: playbookLeadGen,
    pages: 34,
    slug: "local-lead-gen-outreach",
  },
  {
    title: "5 Cold Email Scripts To Book CALLS INSTANTLY",
    description:
      "Five battle-tested email templates that have booked meetings on day one. Each script comes with the psychology behind why it works and when to use it.",
    category: "Cold Outreach",
    image: playbookSalesPipeline,
    pages: 12,
    slug: "cold-email-scripts-calls",
  },
  {
    title: "Bullet-Proof Checklist To Avoid Spam",
    description:
      "The technical checklist to keep your emails landing in the primary inbox. SPF/DKIM/DMARC setup, warmup strategies, sending volume limits, and reputation monitoring.",
    category: "Cold Outreach",
    image: playbookCopywriting,
    pages: 8,
    slug: "spam-checklist",
  },
  {
    title: "5 Plug-and-Play AI Workflows For Cold Outreach",
    description:
      "Five AI-powered workflows for prospecting, writing, and follow-ups. Use ChatGPT, Claude, and n8n to automate up to 80% of your outbound process.",
    category: "Growth",
    image: playbookScaling,
    pages: 22,
    slug: "ai-workflows-outreach",
  },
  {
    title: "4 Cold Email CTAs for Over $3M In Pipeline",
    description:
      "The exact call-to-action formulas behind $3M+ in generated pipeline. Soft CTAs, direct asks, and curiosity-gap closers that convert cold prospects into booked calls.",
    category: "Copywriting",
    image: playbookCopywriting,
    pages: 14,
    slug: "ctas-3m-pipeline",
  },
  {
    title: "3 Subject Lines That Book You Calls This Week",
    description:
      "Three subject line frameworks with 15+ variations each. Real open rate data, A/B testing methodology, and a guide to avoiding spam triggers.",
    category: "Copywriting",
    image: playbookColdEmail,
    pages: 10,
    slug: "subject-lines-calls",
  },
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = playbooks.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-subtle text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <BookOpen className="w-4 h-4 mr-2" />
            NEW PLAYBOOKS ADDED REGULARLY
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Free <span className="text-primary">Playbook Library</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our lessons from booking 1,000+ qualified meetings and generating $1M+ in client revenue — expertly
            condensed into free downloadable playbooks.
          </p>
        </div>
      </section>

      {/* Search + Filter + Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search playbooks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((playbook) => (
              <div
                key={playbook.title}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center p-6">
                  <img
                    src={playbook.image}
                    alt={playbook.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {playbook.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {playbook.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <Badge variant="secondary" className="text-xs">
                      {playbook.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{playbook.pages} pages</span>
                  </div>
                  <Button asChild variant="premium" className="mt-4 w-full group/btn">
                    <Link to={`/download?playbook=${playbook.slug}`}>
                      Download Free
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16 text-lg">No playbooks match your search.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
