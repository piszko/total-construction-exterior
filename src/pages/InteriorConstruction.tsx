
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteriorConstruction = () => {
  const features = [
    "Hardwood Flooring Installation",
    "Carpet & Tile Installation", 
    "Bathroom Remodeling",
    "Kitchen Renovations",
    "Drywall & Painting",
    "Custom Cabinetry"
  ];

  const benefits = [
    "Personalized Design",
    "Quality Craftsmanship", 
    "Increased Home Value",
    "Functional Spaces",
    "Professional Installation",
    "Timely Completion"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-logo-red mr-3" />
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins">
                  Total Interior Construction
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 font-poppins">
                From simple updates to elaborate renovations, let us make your dreams come true. We specialize in hardwood, carpet, tile, bathrooms, drywall and much more.
              </p>
              <Link to="/contact#forms">
                <button 
                  className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-2xl"
                  style={{
                    width: '200px',
                    height: '55px',
                    borderRadius: '27px'
                  }}
                >
                  Get Free Quote
                </button>
              </Link>
            </div>
            <div className="lg:h-[500px] overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/310bd3db-7307-4ff6-8ea6-4f464c721cf6.png"
                alt="Interior Construction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                What We Include
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-logo-red mr-3" />
                    <span className="text-lg text-gray-700 font-poppins">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-logo-red mr-3" />
                    <span className="text-lg text-gray-700 font-poppins">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-logo-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-poppins">
            Ready to Renovate Your Interior?
          </h2>
          <p className="text-xl mb-8 font-poppins">
            Let's discuss your interior construction project and bring your vision to life.
          </p>
          <Link to="/contact">
            <button 
              className="bg-white text-logo-red hover:bg-gray-100 transition-colors font-syne font-medium text-2xl whitespace-nowrap"
              style={{
                width: '250px',
                height: '55px',
                borderRadius: '27px'
              }}
            >
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteriorConstruction;
