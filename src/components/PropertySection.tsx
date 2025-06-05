
const PropertySection = () => {
  const properties = [
    {
      title: "1247 Mayfield Garden Way NE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png"
    },
    {
      title: "892 Brookhaven Circle NE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lovable-uploads/c03d0596-ccaa-4a4c-8c74-fc8039c5fe2c.png"
    },
    {
      title: "1534 Dresden Drive NE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png"
    },
    {
      title: "756 Clairmont Road NE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lovable-uploads/310bd3db-7307-4ff6-8ea6-4f464c721cf6.png"
    },
    {
      title: "2018 LaVista Road NE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lovable-uploads/6e20f217-2601-444a-b4da-fe1996160910.png"
    },
    {
      title: "1165 North Highland Ave NE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/lovable-uploads/7275067e-f8d1-4392-9730-3ede28f23a5b.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Total Construction Projects
          </h2>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-poppins">
                  {property.description}
                </p>
                <div className="flex justify-end">
                  <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors font-poppins">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
