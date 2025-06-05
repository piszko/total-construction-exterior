
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "1247 Mayfield Garden Way NE",
      description: "Complete home renovation including kitchen remodel, bathroom updates, and exterior improvements.",
      image: "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png",
      category: "Residential Remodeling",
      status: "currently under construction",
      details: "This comprehensive renovation project includes a complete kitchen overhaul with custom cabinetry, granite countertops, and modern appliances. The bathroom renovations feature luxury finishes and updated plumbing fixtures."
    },
    {
      title: "892 Brookhaven Circle NE",
      description: "New construction single-family home with modern design elements and energy-efficient features.",
      image: "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png",
      category: "New Construction",
      status: "completed",
      details: "A beautiful 3,200 sq ft home featuring an open floor plan, hardwood floors throughout, and a gourmet kitchen. The exterior showcases stone and brick accents with professional landscaping."
    },
    {
      title: "1534 Dresden Drive NE",
      description: "Luxury bathroom renovation with high-end fixtures and custom tile work.",
      image: "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png",
      category: "Bathroom Remodeling",
      status: "completed",
      details: "Master bathroom transformation featuring a walk-in shower with glass enclosure, double vanity with marble countertops, and custom tile work throughout."
    },
    {
      title: "756 Clairmont Road NE",
      description: "Commercial office renovation with modern finishes and improved layout.",
      image: "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png",
      category: "Commercial Renovation",
      status: "completed",
      details: "Office space renovation including new flooring, updated lighting, modern conference rooms, and improved HVAC systems for better energy efficiency."
    },
    {
      title: "2018 LaVista Road NE",
      description: "Kitchen remodeling project with custom cabinetry and granite countertops.",
      image: "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png",
      category: "Kitchen Remodeling",
      status: "completed",
      details: "Complete kitchen transformation featuring custom white cabinetry, granite countertops, stainless steel appliances, and a large center island with seating."
    },
    {
      title: "1165 North Highland Ave NE",
      description: "Historic home restoration preserving original character while adding modern amenities.",
      image: "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png",
      category: "Historic Restoration",
      status: "completed",
      details: "Careful restoration of a 1920s home maintaining original architectural details while updating electrical, plumbing, and HVAC systems for modern living."
    }
  ];

  const categories = ["All", "New Construction", "Residential Remodeling", "Kitchen Remodeling", "Bathroom Remodeling", "Commercial Renovation", "Historic Restoration"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="text-total-red">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
              Explore our portfolio of successful construction and remodeling projects throughout Atlanta and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-poppins transition-colors ${
                  index === 0 
                    ? 'bg-total-red text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-poppins">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 font-poppins">
                    {project.description}
                  </p>
                  <p className="text-gray-600 text-xs mb-4 font-poppins">
                    {project.details}
                  </p>
                  <div className="flex justify-between items-center">
                    {project.status === "currently under construction" && (
                      <span className="text-total-red text-sm font-poppins font-medium">
                        {project.status}
                      </span>
                    )}
                    {project.status === "completed" && (
                      <span className="text-green-600 text-sm font-poppins font-medium">
                        {project.status}
                      </span>
                    )}
                    <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors font-poppins ml-auto">
                      View Details
                    </button>
                  </div>
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
            Let's Build Your Dream Project
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-poppins">
            Ready to start your construction or remodeling project? Contact us for a free consultation.
          </p>
          <button 
            className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
            style={{
              width: '183px',
              height: '49px',
              borderRadius: '27px'
            }}
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
