
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Home, Wrench } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, you'd fetch this based on the ID
  const project = {
    id: "1247-mayfield-garden",
    title: "1247 Mayfield Garden Way NE",
    description: "Complete home renovation including kitchen remodel, bathroom updates, and exterior improvements.",
    category: "Residential Remodeling",
    status: "currently under construction",
    completionDate: "Expected December 2024",
    location: "Atlanta, GA",
    client: "The Johnson Family",
    projectValue: "$185,000",
    duration: "4-6 months",
    images: [
      "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png",
      "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png",
      "/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png"
    ],
    details: {
      overview: "This comprehensive renovation project transforms a 1970s ranch home into a modern family residence. The project includes a complete kitchen overhaul with custom cabinetry, granite countertops, and state-of-the-art appliances. Bathroom renovations feature luxury finishes and updated plumbing fixtures throughout.",
      scope: [
        "Complete kitchen renovation with custom cabinetry",
        "Master bathroom renovation with walk-in shower",
        "Guest bathroom updates",
        "Hardwood floor installation throughout main level",
        "Interior painting and lighting updates",
        "Exterior siding repair and painting",
        "New front porch construction",
        "Landscaping improvements"
      ],
      challenges: "The main challenge was working around the home's original structural elements while updating all systems to modern standards. We carefully preserved the home's character while enhancing functionality.",
      materials: [
        "Custom maple kitchen cabinets with soft-close drawers",
        "Granite countertops with undermount sink",
        "Porcelain tile flooring in bathrooms",
        "Engineered hardwood flooring",
        "LED recessed lighting throughout",
        "Fiber cement siding for exterior"
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-total-red hover:text-red-600 transition-colors font-poppins"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full font-poppins">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl font-poppins">
              {project.description}
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-2 text-total-red" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1 font-poppins">Location</h3>
                <p className="text-gray-600 text-sm font-poppins">{project.location}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="mx-auto mb-2 text-total-red" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1 font-poppins">Timeline</h3>
                <p className="text-gray-600 text-sm font-poppins">{project.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="mx-auto mb-2 text-total-red" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1 font-poppins">Project Value</h3>
                <p className="text-gray-600 text-sm font-poppins">{project.projectValue}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Wrench className="mx-auto mb-2 text-total-red" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1 font-poppins">Status</h3>
                <p className={`text-sm font-poppins font-medium ${
                  project.status === "completed" ? "text-green-600" : "text-total-red"
                }`}>
                  {project.status}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-poppins">
                {project.details.overview}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Project Scope</h3>
              <ul className="space-y-2 mb-8">
                {project.details.scope.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-total-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 font-poppins">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Challenges & Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-8 font-poppins">
                {project.details.challenges}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Materials Used</h3>
              <ul className="space-y-2">
                {project.details.materials.map((material, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-total-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 font-poppins">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            Let us bring your vision to life with the same quality and attention to detail.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
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
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="font-poppins">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
