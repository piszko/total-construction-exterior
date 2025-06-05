
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hammer, Home, Shield, Wrench, Building, Paintbrush } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Total Exterior Construction",
      description: "From new construction to remodeling, we handle anything from roofs, decks, porches, siding, painting and much more.",
      icon: Hammer,
      image: "/lovable-uploads/7275067e-f8d1-4392-9730-3ede28f23a5b.png",
      features: ["Roofing", "Siding", "Decks & Porches", "Exterior Painting", "Windows & Doors"]
    },
    {
      title: "Total Interior Construction", 
      description: "From simple to elaborate, let us make your dreams come true. Hardwood, carpet, tile, bathrooms, drywall and more.",
      icon: Home,
      image: "/lovable-uploads/310bd3db-7307-4ff6-8ea6-4f464c721cf6.png",
      features: ["Flooring Installation", "Bathroom Remodeling", "Kitchen Renovation", "Drywall", "Interior Painting"]
    },
    {
      title: "Total Roofing Services",
      description: "For all your residential and commercial roofing needs, we offer numerous products and solutions.",
      icon: Shield,
      image: "/lovable-uploads/7cadb1e4-bb42-4bb2-9133-7aac1a0b332b.png",
      features: ["Roof Replacement", "Roof Repair", "Gutter Installation", "Roof Inspection", "Emergency Repairs"]
    },
    {
      title: "Home Additions",
      description: "Expand your living space with professionally designed and constructed home additions.",
      icon: Building,
      image: "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png",
      features: ["Room Additions", "Second Story Additions", "Garage Construction", "Sunrooms", "Deck Additions"]
    },
    {
      title: "Kitchen & Bath Remodeling",
      description: "Transform your kitchen and bathroom spaces with our expert remodeling services.",
      icon: Wrench,
      image: "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png",
      features: ["Kitchen Design", "Bathroom Design", "Countertop Installation", "Cabinet Installation", "Plumbing Updates"]
    },
    {
      title: "Custom Home Building",
      description: "Build your dream home from the ground up with our comprehensive construction services.",
      icon: Paintbrush,
      image: "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png",
      features: ["Custom Design", "Site Preparation", "Foundation Work", "Framing", "Full Construction"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="text-total-red">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
              Comprehensive construction and remodeling services for residential and commercial properties in Atlanta and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-6 h-6 text-total-red mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 font-poppins">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 font-poppins flex items-center">
                        <span className="w-2 h-2 bg-total-red rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-total-red text-white py-2 rounded hover:bg-red-600 transition-colors font-poppins">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-poppins">
            Contact us today for a free consultation and estimate.
          </p>
          <button 
            className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
            style={{
              width: '183px',
              height: '49px',
              borderRadius: '27px'
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
