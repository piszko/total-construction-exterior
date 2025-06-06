
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              About <span className="text-logo-red">Total Construction & Remodeling</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
              Serving Atlanta and surrounding areas since 1990 with quality construction and remodeling services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Our Story
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-poppins">
                Total Construction & Remodeling has been a trusted name in Atlanta's construction industry for over three decades. Founded in 1990, we have built our reputation on quality craftsmanship, reliable service, and customer satisfaction.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-poppins">
                Our team of experienced professionals specializes in both residential and commercial construction projects. From new home construction to complete remodeling, we bring expertise and dedication to every project we undertake.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-poppins">
                We take pride in building not just structures, but lasting relationships with our clients. Our commitment to excellence and attention to detail has made us one of Atlanta's most trusted construction companies.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">35</div>
                  <div className="text-gray-600 text-sm font-poppins">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">2K+</div>
                  <div className="text-gray-600 text-sm font-poppins">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">Many</div>
                  <div className="text-gray-600 text-sm font-poppins">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-start">
              <img 
                src="/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png" 
                alt="Total Construction & Remodeling team at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Quality</h3>
              <p className="text-gray-600 font-poppins">
                We never compromise on quality. Every project is completed to the highest standards using premium materials and proven techniques.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Reliability</h3>
              <p className="text-gray-600 font-poppins">
                Our clients trust us to deliver on time and within budget. We stand behind our work with comprehensive warranties.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Service</h3>
              <p className="text-gray-600 font-poppins">
                Customer satisfaction is our top priority. We work closely with clients to ensure their vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
