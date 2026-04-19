import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Mail, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

import playbookColdEmail from "@/assets/playbook-cold-email.png";
import playbookLocalLeadGen from "@/assets/playbook-local-lead-gen.png";
import playbook5Scripts from "@/assets/playbook-5-scripts.png";
import playbookSpamChecklist from "@/assets/playbook-spam-checklist.png";
import playbookAiWorkflows from "@/assets/playbook-ai-workflows.png";
import playbookCtas from "@/assets/playbook-ctas.png";
import playbookSubjectLines from "@/assets/playbook-subject-lines.png";

const playbookData: Record<string, { title: string; image: string; description: string; category: string; pages: number }> = {
  "ultimate-cold-email-2026": {
    title: "The Ultimate Cold Email Playbook in 2026",
    image: playbookColdEmail,
    description: "The complete 2026 guide to cold email that actually gets replies. Covers modern deliverability, AI personalization at scale, and multi-channel sequencing built for today's inbox filters.",
    category: "Cold Outreach",
    pages: 128,
  },
  "local-lead-gen-outreach": {
    title: "The Local Lead Gen Cold Outreach Playbook",
    image: playbookLocalLeadGen,
    description: "A step by step system for landing local business clients through cold outreach. Includes targeting frameworks, proven scripts, and case studies for HVAC, dental, legal, and home service niches.",
    category: "Lead Generation",
    pages: 14,
  },
  "cold-email-scripts-calls": {
    title: "5 Cold Email Scripts To Book CALLS INSTANTLY",
    image: playbook5Scripts,
    description: "Five plug and play cold email scripts engineered to book sales calls fast. Each template comes with the psychology behind why it works and exactly when to send it.",
    category: "Copywriting",
    pages: 37,
  },
  "spam-checklist": {
    title: "Bullet-Proof Checklist To Avoid Spam",
    image: playbookSpamChecklist,
    description: "An extensive deliverability checklist with SPF, DKIM, copy rules, and the technical setup to consistently land in the primary inbox instead of spam.",
    category: "Deliverability",
    pages: 48,
  },
  "ai-workflows-outreach": {
    title: "5 Plug-and-Play AI Workflows For Cold Outreach",
    image: playbookAiWorkflows,
    description: "Five ready to deploy AI workflows built with Clay, ChatGPT, and Claude that take the manual work off your plate across prospecting, message writing, and follow ups.",
    category: "Lead Generation",
    pages: 37,
  },
  "ctas-3m-pipeline": {
    title: "4 Cold Email CTAs for Over $3M In Pipeline",
    image: playbookCtas,
    description: "The four exact call to action formulas that have driven over $3M in client pipeline. Soft asks, direct asks, and curiosity gap closers that consistently turn cold replies into booked meetings.",
    category: "Copywriting",
    pages: 30,
  },
  "subject-lines-calls": {
    title: "3 Subject Lines That Book You Calls This Week",
    image: playbookSubjectLines,
    description: "Three high performing subject line frameworks with 15+ tested variations of each. Includes real open rate benchmarks, A/B testing methodology, and a quick guide to avoiding spam triggers.",
    category: "Copywriting",
    pages: 31,
  },
};

const Download = () => {
  const [searchParams] = useSearchParams();
  const playbookId = searchParams.get("playbook") || "";
  const playbook = playbookData[playbookId];

  const [email, setEmail] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("kit-subscribe", {
        body: {
          email: email.trim(),
          playbook_id: playbookId,
          newsletter_opt_in: newsletterOptIn,
        },
      });

      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);

      setSubmitted(true);
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!playbook) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-28 pb-16 text-center container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-4">Playbook not found</h1>
          <Button asChild variant="premium">
            <Link to="/resources">← Back to Playbooks</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/resources"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Playbooks
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Playbook preview */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card p-6">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted flex items-center justify-center mb-4">
                <img
                  src={playbook.image}
                  alt={playbook.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-lg font-bold text-foreground">{playbook.title}</h2>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {playbook.description}
              </p>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl shadow-card p-8 md:sticky md:top-24">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Check your inbox!</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We've sent <span className="font-semibold text-foreground">"{playbook.title}"</span> to{" "}
                    <span className="font-semibold text-foreground">{email}</span>. It should arrive within a few minutes.
                  </p>
                  {newsletterOptIn && (
                    <p className="text-muted-foreground text-sm mt-4">
                      You've also been subscribed to our newsletter. Welcome aboard! 🚀
                    </p>
                  )}
                  <Button asChild variant="premium" className="mt-6">
                    <Link to="/resources">Browse More Playbooks</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-4 border border-primary/20">
                    <Mail className="w-3.5 h-3.5 mr-1.5" />
                    FREE DOWNLOAD
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Get your free playbook
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Enter your email and we'll send{" "}
                    <span className="font-semibold text-foreground">"{playbook.title}"</span>{" "}
                    straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                        Email address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 rounded-xl"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={newsletterOptIn}
                        onCheckedChange={(checked) => setNewsletterOptIn(checked === true)}
                        className="mt-0.5"
                      />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Also subscribe me to the Gamic newsletter for weekly growth tips, outreach strategies, and exclusive content.
                      </label>
                    </div>

                    {error && (
                      <p className="text-destructive text-sm">{error}</p>
                    )}

                    <Button
                      type="submit"
                      variant="premium"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Me the Playbook"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Download;
