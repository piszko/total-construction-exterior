
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-[39px] font-semibold text-gray-900 leading-tight mb-6 font-poppins">
              Atlanta, GA Based
              <br />
              Construction, Roofing
              <br />
              and Remodeling Co.
            </h1>
            
            <p className="text-[#6F6F6F] text-[22px] mb-8 leading-relaxed font-epilogue">
              Total Construction & Remodeling specializes in home construction, roofing, and remodeling. We have been serving Atlanta and the surrounding areas since 1985. With hundreds of happy customers and awards for our work, we strive to be the best construction contractors that we can.
            </p>

            <p className="text-[#6F6F6F] text-[22px] mb-8 leading-relaxed font-epilogue">
              If you are looking to start a new residential or commercial construction, remodel a bathroom or kitchen, or are in need of a new roof, please give us a call today for a free, no-hassle consultation. We offer quality craftsmanship and service at a reasonable price.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="bg-total-red text-white font-syne font-medium text-2xl hover:bg-red-600 transition-colors"
                style={{
                  width: '282px',
                  height: '70px',
                  borderRadius: '27px'
                }}
              >
                Get a Free Quote
              </button>
            </div>

            {/* Contact Info */}
            <div className="border-l-4 border-total-red pl-4">
              <p className="text-[#6F6F6F] font-poppins font-medium text-[24px] mb-1">For a Free Consultation:</p>
              <p className="text-total-red text-2xl font-bold font-epilogue">(404) 386-6848</p>
            </div>
          </div>

          {/* Right Image Slideshow */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <div className="relative w-full h-auto">
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={slide.alt}
                      className={`w-full h-auto transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Slideshow Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-total-red' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
