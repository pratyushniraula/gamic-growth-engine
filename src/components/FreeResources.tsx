import { Play } from "lucide-react";

const FreeResources = () => {
  const videos = [
    {
      title: "How to Write Cold Emails That Actually Get Responses",
      description: "Learn the exact framework we use to achieve 15%+ reply rates",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop"
    },
    {
      title: "The Complete Guide to B2B Lead Generation",
      description: "Master the art of finding and qualifying your ideal prospects",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop"
    },
    {
      title: "AI Tools for Sales: 10x Your Outreach Efficiency",
      description: "Discover the AI tools that can automate and optimize your sales process",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop"
    },
    {
      title: "Building a Predictable Sales Pipeline",
      description: "Create a systematic approach to consistent revenue growth",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      title: "Advanced LinkedIn Prospecting Strategies",
      description: "Turn LinkedIn into your most powerful lead generation tool",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=225&fit=crop"
    },
    {
      title: "Scaling Your Sales Team: From 1 to 100",
      description: "The complete playbook for building and scaling high-performing sales teams",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
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
              <div className="relative aspect-video bg-muted">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
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