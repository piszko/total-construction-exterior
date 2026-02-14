
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import HomeReviewsSection from "@/components/HomeReviewsSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData, { localBusinessSchema, organizationSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Atlanta Construction & Remodeling | Total Construction"
        description="Atlanta's trusted construction company since 1990. Expert roofing, remodeling, and new construction services. Free consultations. Call (404) 386-6849."
        canonicalPath="/"
        ogImage="/lovable-uploads/59636e50-63b9-4c62-9e79-8e5059e41b1c.png"
      />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={organizationSchema} />
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <HomeReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
