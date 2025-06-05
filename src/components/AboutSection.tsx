
const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              The <span className="text-total-orange">Potential</span> Of a Property In as Good as The Person Investing in it
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">16</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">2k</div>
                <div className="text-gray-600 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">21k</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
            </div>

            <button className="bg-total-orange text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold">
              Read More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <div className="bg-gray-200 h-96 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
