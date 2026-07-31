import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";

const FreeResources = () => {
  const videos = [
    {
      title: "FREE Cold Email Marketing Course for 2026 (2+ HRS)",
      description: "Here's the ultimate guide for cold email in 2026",
      embedId: "LrINcz2eOdw",
    },
    {
      title: "I Tried Alex Hormozi's $100M Cold Outreach Strategy",
      description: "Learn how to apply Alex Hormozi's cold outreach strategy to your business",
      embedId: "7ho2VKxJD84", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
    },
    {
      title: "53 Minutes of The BEST Cold Email Training To Sign Clients In 2026",
      description: "Watch this live training on how you could use cold email to sign new clients in 2026",
      embedId: "9WTUNlaqx0Q", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop",
    },
    {
      title: "How To Scrape Unlimited Leads in 9 Minutes",
      description: "Here's how you can scrape unlimited leads in 9 minutes",
      embedId: "qeWOvfOdpfw", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
    },
    {
      title: "The Only Loom Cold Outreach Video You'll Ever Need",
      description: "Create high-converting Loom videos that get responses",
      embedId: "I6q5RtMetL4", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop",
    },
    {
      title: "Smartlead.AI Review 2026 | How To Book 100+ Sales Calls Per Month",
      description: "The complete playbook for using Smartlead.AI effectively",
      embedId: "3wFcSL1_fG4", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=225&fit=crop",
    },
  ];

  return (
    <section id="free-resources" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Free Resources</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary-glow">Free Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground measure mx-auto">
            Access our library of proven strategies, frameworks, and actionable insights to help you master cold
            outreach and lead generation
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Reveal
              key={index}
              delay={(index % 2) * 100}
              className="surface-card overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 group"
            >
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-glow transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{video.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
