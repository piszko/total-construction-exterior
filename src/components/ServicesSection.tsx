
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">
            What We Offer:
          </h2>
          <button 
            className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
            style={{
              width: '176px',
              height: '62px',
              borderRadius: '27px'
            }}
          >
            See All
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-[446px] mx-auto">
              <div className="mb-4 w-full max-w-[446px] h-[536px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-[24px] text-gray-900 mb-3 relative">
                  {service.title}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-total-red"></span>
                </h3>
                <p className="font-poppins text-[22px] leading-relaxed" style={{ color: '#6F6F6F' }}>
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
