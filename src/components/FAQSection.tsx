import Reveal from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      q: "How is this different from a data platform like Matchworks or ZoomInfo?",
      a: "Those sell you access to a database, the work stays yours. We run the desk end to end: sourcing, outreach, human qualification, and booked calls with a brief. You buy outcomes, not a login.",
    },
    {
      q: "Will cold outreach damage my firm's reputation?",
      a: "Every message runs under your brand, personalized to each owner, and no introduction happens until a human appointment setter has vetted the conversation. It reads as a discreet advisor, not a broker blasting the market.",
    },
    {
      q: "How fast until I see real conversations?",
      a: "Outreach goes live within about 2 weeks of kickoff; first qualified conversations typically land around day 14.",
    },
    {
      q: "What if the leads aren't actually qualified?",
      a: "Every booked call is phone-confirmed for deal size, ownership, timing, and genuine interest first. That's the entire point of the appointment setter step.",
    },
    {
      q: "Is it worth the cost?",
      a: "One closed mandate at a standard 3–5% fee on a $5M transaction returns $150K–$250K. A 90-day pilot runs $7,500–$18,000. It pays for itself on the first close.",
    },
    {
      q: "Do I own the data?",
      a: "Yes. The signal-scored target lists we build are yours to use beyond the engagement.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="eyebrow mb-4">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-primary-glow">Questions</span>
            </h2>
          </Reveal>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary-glow">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
