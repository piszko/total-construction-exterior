
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from "@/components/SEOHead";

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
      <SEOHead
        title="Roofing Services Atlanta GA | Total Construction"
        description="Expert residential & commercial roofing in Atlanta. Roof replacement, repairs, inspections & 24/7 emergency service. Licensed & insured. Free estimates."
        canonicalPath="/services/roofing-services"
      />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-4">
                  Roofing Services in Atlanta, GA
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-poppins">
                  For all your residential and commercial roofing needs, we offer numerous products and solutions. Protect your property with our expert roofing services.
                </p>
                <Link to="/contact#forms">
                  <button 
                    className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl focus:outline-none focus:ring-2 focus:ring-total-red focus:ring-offset-2"
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
                  alt="Professional roofing installation on a residential home in Atlanta, Georgia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="500"
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
                  Our Roofing Services
                </h2>
                <ul className="space-y-4" aria-label="Roofing services offered">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-total-red mr-3" aria-hidden="true" />
                      <span className="text-lg text-gray-700 font-poppins">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                  Why Choose Us for Roofing
                </h2>
                <ul className="space-y-4" aria-label="Benefits of choosing our roofing services">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="w-5 h-5 text-total-red mr-3" aria-hidden="true" />
                      <span className="text-lg text-gray-700 font-poppins">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
                Call Now: <a href="tel:+14043866849" className="hover:underline">(404) 386-6849</a>
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
                className="bg-white text-total-red hover:bg-gray-100 transition-colors font-syne font-medium text-2xl whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-total-red"
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
      </main>

      <Footer />
    </div>
  );
};

export default RoofingServices;
