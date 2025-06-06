
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoofingServices = () => {
  const features = [
    "Roof Replacement & Installation",
    "Emergency Roof Repairs", 
    "Gutter Installation & Repair",
    "Roof Inspections",
    "Commercial Roofing",
    "Residential Roofing"
  ];

  const benefits = [
    "Licensed & Insured",
    "Weather Protection", 
    "Quality Materials",
    "Expert Installation",
    "Warranty Coverage",
    "24/7 Emergency Service"
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
                <Shield className="w-8 h-8 text-total-red mr-3" />
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins">
                  Total Roofing Services
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 font-poppins">
                For all your residential and commercial roofing needs, we offer numerous products and solutions. Protect your property with our expert roofing services.
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
                src="/lovable-uploads/7cadb1e4-bb42-4bb2-9133-7aac1a0b332b.png"
                alt="Roofing Services"
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

      {/* Emergency Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Emergency Roofing Services
            </h2>
            <p className="text-xl text-gray-600 font-poppins">
              Storm damage? Leak? We're here to help 24/7 with emergency roofing repairs.
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-total-red mb-4 font-poppins">
              Call Now: (404) 386-6849
            </p>
            <p className="text-lg text-gray-600 font-poppins">
              Available 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-total-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-poppins">
            Protect Your Property with Quality Roofing
          </h2>
          <p className="text-xl mb-8 font-poppins">
            Contact us for a comprehensive roof inspection and free estimate.
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

export default RoofingServices;
