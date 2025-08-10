import { Play } from "lucide-react";

const FreeResources = () => {
  const videos = [
    {
      title: "How To Scrape Unlimited Leads in 9 Minutes",
      description: "Learn the exact framework I use to achieve 15%+ reply rates",
      embedId: "qeWOvfOdpfw", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop"
    },
    {
      title: "I used Alex Hormozi's $100M Cold Outreach Strategy",
      description: "Master the art of finding your rythm in cold outreach",
      embedId: "7ho2VKxJD84", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop"
    },
    {
      title: "It's Boring But, You'll Boook 10-20 Calls A Month",
      description: "Discover my secret to consistent lead generation",
      embedId: "lzehNLLoe20", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop"
    },
    {
      title: "The Only Loom Cold Outreach Video You'll Ever Need",
      description: "Create high-converting Loom videos that get responses",
      embedId: "I6q5RtMetL4", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      title: "How To Use Clay.com For Lead Generation (2025)",
      description: "Automate your lead generation process with Clay.com",
      embedId: "zt5kC2jb8nA", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=225&fit=crop"
    },
    {
      title: "Smartlead AI Review 2025 | How To Book 100+ Sales Calls Per Month",
      description: "The complete playbook for using Smartlead AI effectively",
      embedId: "3wFcSL1_fG4", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=225&fit=crop"
    }
  ];

  return (
    <section id="free-resources" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Free Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our library of proven strategies, frameworks, and actionable insights to help you master B2B sales and lead generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group">
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
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;