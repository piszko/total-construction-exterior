import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  // Projects content hidden - Coming Soon page

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

      {/* Coming Soon Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-poppins">
              Coming <span className="text-total-red">Soon</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-poppins">
              We're currently updating our project portfolio. Check back soon to see our amazing construction and remodeling projects throughout Atlanta.
            </p>
            <Link to="/contact">
              <button 
                className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
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

      <Footer />
    </div>
  );
};

export default Projects;
