import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Projects = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const projectImages = ["/lovable-uploads/project-1.jpg", "/lovable-uploads/project-2.jpg", "/lovable-uploads/project-3.jpg", "/lovable-uploads/project-4.jpg", "/lovable-uploads/project-5.jpg", "/lovable-uploads/project-6.jpg", "/lovable-uploads/project-7.jpg", "/lovable-uploads/project-8.jpg", "/lovable-uploads/project-9.jpg", "/lovable-uploads/project-10.jpg", "/lovable-uploads/project-11.jpg", "/lovable-uploads/project-12.jpg", "/lovable-uploads/project-13.jpg", "/lovable-uploads/project-14.jpg", "/lovable-uploads/project-15.jpg"];

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + projectImages.length) % projectImages.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % projectImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImageIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="text-total-red">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
              Check out some of the work below. Soon you will be able to explore our portfolio of successful construction and remodeling projects throughout Atlanta and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectImages.map((image, index) => <div key={index} className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300" onClick={() => setSelectedImageIndex(index)}>
                <img src={image} alt={`Project ${index + 1}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-6xl p-0 bg-black/95 border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <img 
              src={selectedImageIndex !== null ? projectImages[selectedImageIndex] : ""} 
              alt="Project detail" 
              className="w-full h-auto max-h-[85vh] object-contain" 
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${projectImages.length}` : ""}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Coming Soon Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-poppins">
              More <span className="text-total-red">Coming Soon</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-poppins">
              We're currently updating our project portfolio. Check back soon to see our amazing construction and remodeling projects throughout Atlanta.
            </p>
            <Link to="/contact">
              <button className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl" style={{
              width: '200px',
              height: '49px',
              borderRadius: '27px'
            }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Projects;