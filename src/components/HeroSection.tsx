
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/lovable-uploads/07bc87f8-c99b-492d-9956-7bce8bc28e27.png",
      alt: "Beautiful modern house with professional construction work"
    },
    {
      image: "/lovable-uploads/6cf34b2d-b0a4-46f6-b951-53be648f7e80.png",
      alt: "Modern house construction with architectural plans"
    }
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-white py-8 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Image/Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-30' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        
        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 md:p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 md:p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-total-red' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="animate-fade-in bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-gray-900 leading-tight mb-4 md:mb-6 font-poppins">
              Atlanta, GA Based
              <br />
              Construction, Roofing
              <br />
              and Remodeling Co.
            </h1>
            
            <p className="text-[#6F6F6F] text-base md:text-lg lg:text-[22px] mb-4 md:mb-6 lg:mb-8 leading-relaxed font-epilogue">
              Total Construction & Remodeling specializes in home construction, roofing, and remodeling. We have been serving Atlanta and the surrounding areas since 1985. With hundreds of happy customers and awards for our work, we strive to be the best construction contractors that we can.
            </p>

            <p className="text-[#6F6F6F] text-base md:text-lg lg:text-[22px] mb-4 md:mb-6 lg:mb-8 leading-relaxed font-epilogue">
              If you are looking to start a new residential or commercial construction, remodel a bathroom or kitchen, or are in need of a new roof, please give us a call today for a free, no-hassle consultation. We offer quality craftsmanship and service at a reasonable price.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4 md:mb-6 lg:mb-8">
              <Link to="/contact">
                <button 
                  className="w-full sm:w-auto bg-total-red text-white font-syne font-medium text-lg md:text-xl lg:text-2xl hover:bg-red-600 transition-colors px-6 md:px-8 py-3 md:py-4 rounded-[27px]"
                  style={{
                    minWidth: '240px',
                    height: '56px'
                  }}
                >
                  Get a Free Quote
                </button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="border-l-4 border-total-red pl-3 md:pl-4">
              <p className="text-[#6F6F6F] font-poppins font-medium text-base md:text-lg lg:text-[24px] mb-1">For a Free Consultation:</p>
              <p className="text-total-red text-lg md:text-xl lg:text-2xl font-bold font-epilogue">(404) 386-6848</p>
            </div>
          </div>

          {/* Right side - empty space for better mobile layout */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
