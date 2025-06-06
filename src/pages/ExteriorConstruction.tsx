
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hammer, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExteriorConstruction = () => {
  const features = [
    "Custom Roofing Solutions",
    "Premium Siding Installation", 
    "Deck & Porch Construction",
    "Exterior Painting",
    "Window & Door Installation",
    "Gutter Systems"
  ];

  const benefits = [
    "Increase Property Value",
    "Enhanced Curb Appeal", 
    "Weather Protection",
    "Energy Efficiency",
    "Long-lasting Materials",
    "Professional Installation"
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
                <Hammer className="w-8 h-8 text-total-red mr-3" />
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins">
                  Total Exterior Construction
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 font-poppins">
                From new construction to complete remodeling, we handle everything from roofs, decks, porches, siding, painting and much more. Transform your home's exterior with our expert craftsmanship.
              </p>
              <Link to="/contact">
                <button 
                  className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
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
                src="/lovable-uploads/7275067e-f8d1-4392-9730-3ede28f23a5b.png"
                alt="Exterior Construction"
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
                    <CheckCircle className="w-5 h-5 text-total-red mr-3" />
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
                    <Star className="w-5 h-5 text-total-red mr-3" />
                    <span className="text-lg text-gray-700 font-poppins">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-total-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-poppins">
            Ready to Transform Your Home's Exterior?
          </h2>
          <p className="text-xl mb-8 font-poppins">
            Get a free consultation and estimate for your exterior construction project.
          </p>
          <Link to="/contact">
            <button 
              className="bg-white text-total-red hover:bg-gray-100 transition-colors font-syne font-medium text-2xl whitespace-nowrap"
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

export default ExteriorConstruction;
