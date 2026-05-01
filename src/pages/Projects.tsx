import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Construction Projects Atlanta | Total Construction"
        description="Browse our portfolio of construction, roofing, and remodeling projects in Atlanta GA. See the quality craftsmanship that sets us apart."
        canonicalPath="/projects"
      />
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                Our Construction Projects in Atlanta
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
                Explore our portfolio of successful construction and remodeling projects throughout Atlanta and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Project Cards */}
        <section className="py-16 bg-white" aria-label="Project portfolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white focus:outline-none focus:ring-2 focus:ring-total-red focus:ring-offset-2"
                  aria-label={`View ${project.title} project gallery`}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} project thumbnail`}
                      className={`w-full h-full object-cover transition-all duration-500 ${project.thumbnailHover ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
                      loading="lazy"
                      width="400"
                      height="256"
                    />
                    {project.thumbnailHover && (
                      <img
                        src={project.thumbnailHover}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        loading="lazy"
                        width="400"
                        height="256"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-total-red transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 font-poppins text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-poppins">
                Start Your Project Today
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-poppins">
                Ready to bring your vision to life? Contact our team to discuss your construction or remodeling project.
              </p>
              <Link to="/contact">
                <button
                  className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl focus:outline-none focus:ring-2 focus:ring-total-red focus:ring-offset-2"
                  style={{
                    width: '200px',
                    height: '49px',
                    borderRadius: '27px'
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
