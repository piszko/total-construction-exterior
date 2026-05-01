import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from "@/components/SEOHead";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? getProjectById(id) : undefined;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = project?.images ?? [];
  const descriptions = project?.imageDescriptions ?? [];

  const handlePrevious = () => {
    if (selectedImageIndex !== null && images.length > 0) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && images.length > 0) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
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
  }, [selectedImageIndex, images.length]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${project.title} | Total Construction Projects`}
        description={project.description}
        canonicalPath={`/projects/${project.id}`}
      />
      <Header />

      <main id="main-content">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="inline-flex items-center text-total-red hover:text-red-600 transition-colors font-poppins focus:outline-none focus:ring-2 focus:ring-total-red focus:ring-offset-2 rounded"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl font-poppins">
              {project.description}
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-gray-50" aria-label={`${project.title} photo gallery`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Project Gallery</h2>

            {images.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg">
                <p className="text-xl text-gray-600 font-poppins">
                  Photos coming soon. Check back shortly to see this project's gallery.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImageIndex(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${descriptions[index] || `image ${index + 1}`}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedImageIndex(index);
                      }
                    }}
                  >
                    <img
                      src={image}
                      alt={descriptions[index] || `${project.title} image ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="192"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-6xl p-0 bg-black/95 border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
                onClick={handlePrevious}
                aria-label="Previous project image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <img
                src={selectedImageIndex !== null ? images[selectedImageIndex] : ""}
                alt={selectedImageIndex !== null ? (descriptions[selectedImageIndex] || `${project.title} image`) : "Project detail"}
                className="w-full h-auto max-h-[85vh] object-contain"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
                onClick={handleNext}
                aria-label="Next project image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm" aria-live="polite">
                {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${images.length}` : ""}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-poppins">
              Let us bring your vision to life with the same quality and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button
                  className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-2xl focus:outline-none focus:ring-2 focus:ring-total-red focus:ring-offset-2"
                  style={{ width: '183px', height: '49px', borderRadius: '27px' }}
                >
                  Contact Us
                </button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="font-poppins h-[49px]">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
