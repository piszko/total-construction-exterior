
import { Hammer, Home, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "Roof Replacement",
      description: "Complete roof replacement services using premium materials. Expert installation for asphalt shingles, metal roofing, and tile systems.",
      icon: Shield,
      image: "/lovable-uploads/7cadb1e4-bb42-4bb2-9133-7aac1a0b332b.png",
      link: "/services/roofing-services"
    },
    {
      title: "Roof Repairs",
      description: "Emergency and scheduled roof repairs for leaks, storm damage, and wear. Fast response times to protect your property.",
      icon: Hammer,
      image: "/lovable-uploads/7275067e-f8d1-4392-9730-3ede28f23a5b.png",
      link: "/services/exterior-construction"
    },
    {
      title: "Inspections & Maintenance", 
      description: "Comprehensive roof inspections and preventive maintenance programs to extend your roof's lifespan and prevent costly repairs.",
      icon: Home,
      image: "/lovable-uploads/310bd3db-7307-4ff6-8ea6-4f464c721cf6.png",
      link: "/services/interior-construction"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">
            Services We Offer:
          </h2>
          <Link to="/services" className="flex-shrink-0">
            <button 
              className="bg-logo-red text-white hover:bg-red-700 transition-colors font-syne font-medium text-xl sm:text-2xl whitespace-nowrap px-4 sm:px-6"
              style={{
                width: 'auto',
                minWidth: '176px',
                height: '62px',
                borderRadius: '27px'
              }}
            >
              View All Services
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-[446px] mx-auto">
              <Link to={service.link} className="block group">
                <div 
                  className="mb-4 w-full max-w-[446px] h-[536px] rounded-lg overflow-hidden"
                  style={{ borderRadius: '8px' }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </Link>
              <div>
                <Link to={service.link}>
                  <h3 className="font-poppins font-semibold text-[24px] text-gray-900 mb-3 hover:text-logo-red transition-colors">
                    {service.title}
                  </h3>
                </Link>
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
