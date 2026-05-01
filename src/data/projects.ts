export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  imageDescriptions: string[];
}

const miscImages = [
  "/lovable-uploads/project-1.jpg",
  "/lovable-uploads/project-2.jpg",
  "/lovable-uploads/project-3.jpg",
  "/lovable-uploads/project-4.jpg",
  "/lovable-uploads/project-5.jpg",
  "/lovable-uploads/project-6.jpg",
  "/lovable-uploads/project-7.jpg",
  "/lovable-uploads/project-8.jpg",
  "/lovable-uploads/project-9.jpg",
  "/lovable-uploads/project-10.jpg",
  "/lovable-uploads/project-11.jpg",
  "/lovable-uploads/project-12.jpg",
  "/lovable-uploads/project-13.jpg",
  "/lovable-uploads/project-14.jpg",
  "/lovable-uploads/project-15.jpg",
];

const miscDescriptions = [
  "Residential roof replacement in Atlanta",
  "Kitchen remodel with granite countertops",
  "Full home exterior renovation",
  "Bathroom remodeling project",
  "Custom deck construction",
  "Interior painting and drywall work",
  "Siding installation on residential home",
  "Porch construction and renovation",
  "Hardwood flooring installation",
  "Commercial roofing project",
  "Home addition construction",
  "Window and door replacement",
  "Exterior painting project",
  "Gutter system installation",
  "Complete home renovation",
];

export const projects: Project[] = [
  {
    id: "1888-delphine",
    title: "1888 Delphine",
    description: "Custom construction and remodeling project at 1888 Delphine.",
    thumbnail: "/placeholder.svg",
    images: [],
    imageDescriptions: [],
  },
  {
    id: "2958-valley-ridge",
    title: "2958 Valley Ridge",
    description: "Full-scope renovation project at 2958 Valley Ridge.",
    thumbnail: "/placeholder.svg",
    images: [],
    imageDescriptions: [],
  },
  {
    id: "misc",
    title: "Miscellaneous Projects",
    description: "A collection of our past construction, roofing, and remodeling work across Atlanta.",
    thumbnail: miscImages[0],
    images: miscImages,
    imageDescriptions: miscDescriptions,
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
