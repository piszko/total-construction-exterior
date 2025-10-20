import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const HomeReviewsSection = () => {
  // Get 3 random reviews on each render/refresh
  const randomReviews = useMemo(() => {
    const shuffled = [...reviews].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            What Our <span className="text-total-red">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
            Hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {randomReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              {review.text && (
                <p className="font-epilogue text-gray-600 mb-4 leading-relaxed line-clamp-6">
                  "{review.text}"
                </p>
              )}

              {/* Positive Tags */}
              {review.positive && (
                <div className="mb-4">
                  <p className="font-poppins text-sm font-semibold text-total-red mb-1">
                    Positive
                  </p>
                  <p className="font-epilogue text-sm text-gray-600">{review.positive}</p>
                </div>
              )}

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-poppins font-semibold text-gray-900">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/reviews">
            <button className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-xl px-8 py-3 rounded-full">
              Read More Reviews
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeReviewsSection;
