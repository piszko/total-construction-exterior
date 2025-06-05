
const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-poppins text-left">
            Our Company
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-total-red">Total Construction & Remodeling</span> is an Atlanta based construction company specializing in new construction and remodeling.
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-poppins">
              We have been serving Atlanta and the surrounding areas since 1990. With hundreds of happy customers, we strive build structures and relationships that last. If you are looking to start a new residential or commercial construction or just a remodel, please give us a call today for your free consultation.
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

            <button 
              className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl"
              style={{
                width: '176px',
                height: '62px',
                borderRadius: '27px'
              }}
            >
              Read More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img 
              src="/lovable-uploads/a5d40fca-81d6-4d1a-8426-931a7bed28df.png" 
              alt="Beautiful modern house construction by Total Construction & Remodeling"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
