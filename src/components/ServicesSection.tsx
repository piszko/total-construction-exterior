
import { Hammer, Home, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Total Exterior Construction",
      description: "From new construction to remodeling, we handle anything from roofs, decks, porches, siding, painting and much more.",
      icon: Hammer,
      image: "/lovable-uploads/7275067e-f8d1-4392-9730-3ede28f23a5b.png"
    },
    {
      title: "Total Interior Construction", 
      description: "From simple to elaborate, let us make your dreams come true. Hardwood, carpet, tile, bathrooms, drywall and more.",
      icon: Home,
      image: "/lovable-uploads/310bd3db-7307-4ff6-8ea6-4f464c721cf6.png"
    },
    {
      title: "Total Roofing Services",
      description: "For all your residential and commercial roofing needs, we offer numerous products and solutions.",
      icon: Shield,
      image: "/lovable-uploads/7cadb1e4-bb42-4bb2-9133-7aac1a0b332b.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">
            What We Offer:
          </h2>
          <button className="bg-total-red text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-poppins font-medium">
            See All
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-poppins">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
