import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Gamic completely transformed our lead generation process. We went from struggling to book 2-3 meetings per month to consistently getting 15-20 qualified prospects on our calendar every week. The ROI has been incredible.",
      author: "Sarah Chen",
      company: "TechScale Pro",
      role: "CEO",
      rating: 5,
      media: [
        "/ERA1.PNG",
        "/ERA2.PNG",
        "/ERA3.PNG"
      ],
      mediaType: "image",
      results: "$54,000 Added to Saas Company's Pipeline in 5 Months"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % testimonials[0].media.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + testimonials[0].media.length) % testimonials[0].media.length);
  };

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

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300">
              {/* Media Section */}
              <div className="relative aspect-video bg-muted">
                <div className="relative w-full h-full">
                  <img 
                    src={Array.isArray(testimonial.media) ? testimonial.media[currentImageIndex] : testimonial.media} 
                    alt={`${testimonial.author} testimonial ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Buttons */}
                  {Array.isArray(testimonial.media) && testimonial.media.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimonial.media.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndex(imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
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