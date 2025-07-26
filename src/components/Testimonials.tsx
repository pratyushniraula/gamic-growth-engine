import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Gamic completely transformed our lead generation process. We went from struggling to book 2-3 meetings per month to consistently getting 15-20 qualified prospects on our calendar every week. The ROI has been incredible.",
      author: "Sarah Chen",
      company: "TechScale Pro",
      role: "CEO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
      results: "52 meetings booked, $280K revenue"
    },
    {
      content: "The best part about working with Gamic is that it's completely hands-off for us. They handle everything from lead research to booking meetings. Our team can focus entirely on what we do best - closing deals and serving clients.",
      author: "Michael Torres", 
      company: "Revenue Rocket",
      role: "Founder",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      results: "38 meetings booked, $190K revenue"
    },
    {
      content: "Their AI-powered personalization is next level. The emails don't feel like mass outreach - they're genuinely personalized and relevant. Our response rates increased by over 300% compared to our previous agency.",
      author: "Jennifer Park",
      company: "GrowthLabs", 
      role: "Managing Partner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      results: "29 meetings booked, $145K revenue"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300 relative">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              
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
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to hear more success stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Watch video testimonials from our clients and see exactly how we've helped them scale their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all">
                Watch Video Testimonials
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-all">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;