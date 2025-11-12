import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { reviews } from "@/data/reviews";
import { useState } from "react";

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const toggleReview = (id: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="pt-16 pb-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                Customer <span className="text-total-red">Reviews</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins mb-8">
                See what our satisfied customers have to say about our work.
              </p>
              <a
                href="/contact#forms"
                className="inline-block"
              >
                <button
                  className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-2xl"
                  style={{
                    width: "220px",
                    height: "62px",
                    borderRadius: "27px",
                  }}
                >
                  Leave a Review
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pt-8 pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {[...reviews].sort((a, b) => b.id - a.id).map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow break-inside-avoid mb-8"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  {review.text && (
                    <div className="mb-4">
                      <p className={`font-epilogue text-gray-600 leading-relaxed ${!expandedReviews.has(review.id) ? 'line-clamp-6' : ''}`}>
                        "{review.text}"
                      </p>
                      {review.text.length > 300 && (
                        <button
                          onClick={() => toggleReview(review.id)}
                          className="text-logo-red hover:bg-logo-red hover:text-white border border-logo-red font-poppins text-sm font-medium mt-2 flex items-center gap-1 transition-all rounded-full px-4 py-1.5"
                        >
                          {expandedReviews.has(review.id) ? (
                            <>
                              Show less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Read more <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Positive Tags */}
                  {review.positive && (
                    <div className="mb-4">
                      <p className="font-poppins text-sm font-semibold text-total-red mb-1">Positive</p>
                      <p className="font-epilogue text-sm text-gray-600">{review.positive}</p>
                    </div>
                  )}

                  {/* Services */}
                  {review.services && (
                    <div className="mb-4">
                      <p className="font-poppins text-sm font-semibold text-total-red mb-1">Services</p>
                      <p className="font-epilogue text-sm text-gray-600">{review.services}</p>
                    </div>
                  )}

                  {/* Customer Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-poppins font-semibold text-gray-900">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl mb-4 text-gray-900">
              Want to share your experience?
            </h2>
            <p className="font-poppins text-lg text-gray-600 mb-6">We'd love to hear from you!</p>
            <a
              href="/contact#forms"
              className="inline-block"
            >
              <button
                className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-2xl"
                style={{
                  width: "220px",
                  height: "62px",
                  borderRadius: "27px",
                }}
              >
                Leave a Review
              </button>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
