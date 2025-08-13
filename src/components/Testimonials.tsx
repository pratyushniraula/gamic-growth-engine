import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Gamic completely transformed our lead generation process. We went from struggling to book 2-3 meetings per month to consistently getting 15-20 qualified prospects on our calendar every week. The ROI has been incredible.",
      author: "Sarah Chen",
      company: "TechScale Pro",
      role: "CEO",
      rating: 5,
      media: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=300&fit=crop&crop=face",
      mediaType: "image",
      results: "52 meetings booked, $280K revenue"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what B2B leaders are saying about working with Gamic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300">
              {/* Media Section */}
              <div className="relative aspect-video bg-muted">
                {testimonial.mediaType === "video" ? (
                  <iframe 
                    src={`https://www.youtube.com/embed/${testimonial.media}`}
                    title={`${testimonial.author} testimonial`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img 
                    src={testimonial.media} 
                    alt={`${testimonial.author} testimonial`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Results */}
                <div className="bg-primary/5 rounded-lg p-3 mb-6">
                  <div className="text-sm font-semibold text-primary">Results:</div>
                  <div className="text-sm text-muted-foreground">{testimonial.results}</div>
                </div>

                {/* Author */}
                <div className="text-center">
                  <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;