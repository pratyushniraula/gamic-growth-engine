import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Mail, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

import playbookColdEmail from "@/assets/playbook-cold-email.jpg";
import playbookLeadGen from "@/assets/playbook-lead-gen.jpg";
import playbookSalesPipeline from "@/assets/playbook-sales-pipeline.jpg";
import playbookCopywriting from "@/assets/playbook-copywriting.jpg";
import playbookScaling from "@/assets/playbook-scaling.jpg";

const playbookData: Record<string, { title: string; image: string; description: string }> = {
  "ultimate-cold-email-2026": {
    title: "The Ultimate Cold Email Playbook in 2026",
    image: playbookColdEmail,
    description: "The complete 2026 guide to cold email that actually gets replies. Covers deliverability, AI-powered personalization at scale, and multi-channel sequencing built for today's inbox filters.",
  },
  "local-lead-gen-outreach": {
    title: "The Local Lead Gen Cold Outreach Playbook",
    image: playbookLeadGen,
    description: "How to find and close local business clients using cold outreach. Includes proven scripts and targeting strategies for HVAC, dental, legal, and home service niches.",
  },
  "cold-email-scripts-calls": {
    title: "5 Cold Email Scripts To Book CALLS INSTANTLY",
    image: playbookSalesPipeline,
    description: "Five battle-tested email templates that have booked meetings on day one. Each script comes with the psychology behind why it works and when to use it.",
  },
  "spam-checklist": {
    title: "Bullet-Proof Checklist To Avoid Spam",
    image: playbookCopywriting,
    description: "The technical checklist to keep your emails landing in the primary inbox. SPF/DKIM/DMARC setup, warmup strategies, sending volume limits, and reputation monitoring.",
  },
  "ai-workflows-outreach": {
    title: "5 Plug-and-Play AI Workflows For Cold Outreach",
    image: playbookScaling,
    description: "Five AI-powered workflows for prospecting, writing, and follow-ups. Use ChatGPT, Claude, and n8n to automate up to 80% of your outbound process.",
  },
  "ctas-3m-pipeline": {
    title: "4 Cold Email CTAs for Over $3M In Pipeline",
    image: playbookCopywriting,
    description: "The exact call-to-action formulas behind $3M+ in generated pipeline. Soft CTAs, direct asks, and curiosity-gap closers that convert cold prospects into booked calls.",
  },
  "subject-lines-calls": {
    title: "3 Subject Lines That Book You Calls This Week",
    image: playbookColdEmail,
    description: "Three subject line frameworks with 15+ variations each. Real open rate data, A/B testing methodology, and a guide to avoiding spam triggers.",
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
