import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";
const Testimonials = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([0, 0, 0]);
  const testimonials = [
    {
      content: "",
      author: "Arrandip Landa",
      company: "Prospect Finder",
      role: "Founder",
      rating: 5,
      media: ["/whatsappupdated.jpg"],
      mediaType: "image",
      results: "$31,500 Added to Marketing Agency in 2.5 Months",
    },
    {
      content:
        "Working with Gamic has been a game-changer for our B2B sales strategy. Their targeted approach helped us connect with decision-makers we couldn't reach before. Our conversion rates have more than doubled.",
      author: "Rob Haughian",
      company: "Vertech Group",
      role: "Founder",
      rating: 5,
      media: ["/sarah-mitchell-3.jpg", "/sarah-mitchell-1.jpg", "/sarah-mitchell-2.jpg"],
      mediaType: "image",
      results: "$100,000 Added to Recruitment Agency's Pipeline in 3 months",
    },
    {
      content:
        "Gamic completely transformed our lead generation process. We went from struggling to book 2-3 meetings per month to consistently getting 15-20 qualified prospects on our calendar every week. The ROI has been incredible.",
      author: "Eric Allen",
      company: "ERA Fit",
      role: "CEO",
      rating: 5,
      media: ["/IMG_4342.jpg", "/IMG_4343.jpg", "/IMG_4344.jpg"],
      mediaType: "image",
      results: "$54,000 Added to Saas Company's Pipeline in 5 Months",
    },
  ];
  const nextImage = (testimonialIndex: number, mediaLength: number) => {
    setCurrentImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[testimonialIndex] = (newIndices[testimonialIndex] + 1) % mediaLength;
      return newIndices;
    });
  };
  const prevImage = (testimonialIndex: number, mediaLength: number) => {
    setCurrentImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[testimonialIndex] = (newIndices[testimonialIndex] - 1 + mediaLength) % mediaLength;
      return newIndices;
    });
  };
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary-glow">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground measure mx-auto">
            Don't just take our word for it. Here's what B2B leaders are saying about working with Gamic.
          </p>
        </Reveal>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div
                key={index}
                className="surface-card overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
              >
                {/* Media Section */}
                <div className="relative bg-secondary rounded-t-2xl overflow-hidden h-64">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={
                        Array.isArray(testimonial.media)
                          ? testimonial.media[currentImageIndices[index]]
                          : testimonial.media
                      }
                      alt={`${testimonial.author} testimonial ${currentImageIndices[index] + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Navigation Buttons */}
                    {Array.isArray(testimonial.media) && testimonial.media.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index, testimonial.media.length)}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => nextImage(index, testimonial.media.length)}
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
                              onClick={() =>
                                setCurrentImageIndices((prev) => {
                                  const newIndices = [...prev];
                                  newIndices[index] = imgIndex;
                                  return newIndices;
                                })
                              }
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${imgIndex === currentImageIndices[index] ? "bg-white" : "bg-white/50"}`}
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

                  {/* Results */}
                  <div className="bg-primary/5 rounded-lg p-3 mb-6">
                    <div className="eyebrow">Results</div>
                    <div className="text-base text-muted-foreground font-bold">{testimonial.results}</div>
                  </div>

                  {/* Author */}
                  <div className="text-center">
                    <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="stat-label">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third testimonial centered below */}
          <div className="flex justify-center mt-6">
            <div className="w-full md:w-1/2">
              {testimonials.slice(2, 3).map((testimonial, idx) => {
                const index = idx + 2;
                return (
                  <div
                    key={index}
                    className="surface-card overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
                  >
                    {/* Media Section */}
                    <div className="relative bg-secondary rounded-t-2xl overflow-hidden h-64">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={
                            Array.isArray(testimonial.media)
                              ? testimonial.media[currentImageIndices[index]]
                              : testimonial.media
                          }
                          alt={`${testimonial.author} testimonial ${currentImageIndices[index] + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />

                        {/* Navigation Buttons */}
                        {Array.isArray(testimonial.media) && testimonial.media.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(index, testimonial.media.length)}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => nextImage(index, testimonial.media.length)}
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
                                  onClick={() =>
                                    setCurrentImageIndices((prev) => {
                                      const newIndices = [...prev];
                                      newIndices[index] = imgIndex;
                                      return newIndices;
                                    })
                                  }
                                  className={`w-2 h-2 rounded-full transition-all duration-200 ${imgIndex === currentImageIndices[index] ? "bg-white" : "bg-white/50"}`}
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

                      {/* Results */}
                      <div className="bg-primary/5 rounded-lg p-3 mb-6">
                        <div className="eyebrow">Results</div>
                        <div className="text-base text-muted-foreground font-bold">{testimonial.results}</div>
                      </div>

                      {/* Author */}
                      <div className="text-center">
                        <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="stat-label">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
