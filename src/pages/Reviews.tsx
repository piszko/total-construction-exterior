import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";

const Reviews = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {reviews.map((review) => (
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
                    <p className="font-epilogue text-gray-600 mb-4 leading-relaxed">"{review.text}"</p>
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
