
const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Atlanta, GA Based
              <br />
              Construction, Roofing
              <br />
              and Remodeling Co.
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Total Construction & Remodeling specializes in home construction, roofing, and remodeling. We have been serving Atlanta and the surrounding areas since 1985. With hundreds of happy customers and awards for our work, we strive to be the best construction contractors that we can.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              If you are looking to start a new residential or commercial construction, remodel a bathroom or kitchen, or are in need of a new roof, please give us a call today for a free, no-hassle consultation. We offer quality craftsmanship and service at a reasonable price.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-total-red text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors font-semibold text-lg">
                Get a Free Quote
              </button>
            </div>

            {/* Contact Info */}
            <div className="border-l-4 border-total-red pl-4">
              <p className="text-gray-700 font-medium mb-1">For a Free Consultation:</p>
              <p className="text-total-red text-2xl font-bold">(404) 386-6848</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="/lovable-uploads/c03d0596-ccaa-4a4c-8c74-fc8039c5fe2c.png"
                alt="Beautiful modern house with professional construction work"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
