import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = `structured-data-${data['@type']}`;
    
    // Remove existing with same id
    const existing = document.getElementById(script.id);
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById(script.id);
      if (el) el.remove();
    };
  }, [data]);

  return null;
};

export default StructuredData;

// Reusable schema objects
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Total Construction & Remodeling",
  "description": "Professional construction, roofing, and remodeling services in Atlanta, GA since 1990.",
  "url": "https://www.fortress-atl.com",
  "telephone": "+14043866849",
  "email": "info@totalconstructionandremodeling.com",
  "image": "https://www.fortress-atl.com/lovable-uploads/59636e50-63b9-4c62-9e79-8e5059e41b1c.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.749,
    "longitude": -84.388
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.749, "longitude": -84.388 },
    "geoRadius": "50000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "foundingDate": "1990",
  "sameAs": []
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Total Construction & Remodeling",
  "url": "https://www.fortress-atl.com",
  "logo": "https://www.fortress-atl.com/lovable-uploads/59636e50-63b9-4c62-9e79-8e5059e41b1c.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+14043866849",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  }
};
