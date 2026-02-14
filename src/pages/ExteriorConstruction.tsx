
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hammer, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from "@/components/SEOHead";

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
      <SEOHead
        title="Exterior Construction Atlanta | Total Construction"
        description="Transform your home's exterior with Atlanta's trusted contractor. Roofing, siding, decks, porches, painting & more. Licensed & insured since 1990."
        canonicalPath="/services/exterior-construction"
      />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-4">
                  Exterior Construction in Atlanta
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-poppins">
                  From new construction to complete remodeling, we handle everything from roofs, decks, porches, siding, painting and much more. Transform your home's exterior with our expert craftsmanship.
                </p>
                <Link to="/contact#forms">
                  <button 
                    className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-2xl focus:outline-none focus:ring-2 focus:ring-logo-red focus:ring-offset-2"
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
                  alt="Exterior construction project with new siding and deck installation on Atlanta home"
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
                  Exterior Services We Offer
                </h2>
                <ul className="space-y-4" aria-label="Exterior construction services">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-logo-red mr-3" aria-hidden="true" />
                      <span className="text-lg text-gray-700 font-poppins">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                  Why Choose Us
                </h2>
                <ul className="space-y-4" aria-label="Benefits of our exterior construction">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="w-5 h-5 text-logo-red mr-3" aria-hidden="true" />
                      <span className="text-lg text-gray-700 font-poppins">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-logo-red text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-poppins">
              Ready to Transform Your Home's Exterior?
            </h2>
            <p className="text-xl mb-8 font-poppins">
              Get a free consultation and estimate for your exterior construction project.
            </p>
            <Link to="/contact">
              <button 
                className="bg-white text-logo-red hover:bg-gray-100 transition-colors font-syne font-medium text-2xl whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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

export default ExteriorConstruction;
