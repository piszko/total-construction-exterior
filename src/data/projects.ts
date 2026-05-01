export interface ProjectImage {
  src: string;
  alt: string;
  /** Optional empty/un-staged version of this same shot for before/after comparison */
  emptySrc?: string;
  emptyAlt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: ProjectImage[];
}

const miscImages: ProjectImage[] = [
  { src: "/lovable-uploads/project-1.jpg", alt: "Residential roof replacement in Atlanta" },
  { src: "/lovable-uploads/project-2.jpg", alt: "Kitchen remodel with granite countertops" },
  { src: "/lovable-uploads/project-3.jpg", alt: "Full home exterior renovation" },
  { src: "/lovable-uploads/project-4.jpg", alt: "Bathroom remodeling project" },
  { src: "/lovable-uploads/project-5.jpg", alt: "Custom deck construction" },
  { src: "/lovable-uploads/project-6.jpg", alt: "Interior painting and drywall work" },
  { src: "/lovable-uploads/project-7.jpg", alt: "Siding installation on residential home" },
  { src: "/lovable-uploads/project-8.jpg", alt: "Porch construction and renovation" },
  { src: "/lovable-uploads/project-9.jpg", alt: "Hardwood flooring installation" },
  { src: "/lovable-uploads/project-10.jpg", alt: "Commercial roofing project" },
  { src: "/lovable-uploads/project-11.jpg", alt: "Home addition construction" },
  { src: "/lovable-uploads/project-12.jpg", alt: "Window and door replacement" },
  { src: "/lovable-uploads/project-13.jpg", alt: "Exterior painting project" },
  { src: "/lovable-uploads/project-14.jpg", alt: "Gutter system installation" },
  { src: "/lovable-uploads/project-15.jpg", alt: "Complete home renovation" },
];

const delphineImages: ProjectImage[] = [
  {
    src: "/projects/1888-delphine/exterior-1.jpg",
    alt: "1888 Delphine front exterior view with new siding, brick accents, and refreshed roofline",
  },
  {
    src: "/projects/1888-delphine/exterior-2.jpg",
    alt: "1888 Delphine front yard view showing the renovated ranch home and fresh landscaping",
  },
  {
    src: "/projects/1888-delphine/exterior-3-entry.jpg",
    alt: "1888 Delphine covered front entry with new columns, mulched beds, and walkway",
  },
  {
    src: "/projects/1888-delphine/great-room-entry.jpg",
    alt: "View from the front door into the open great room and remodeled kitchen at 1888 Delphine",
  },
  {
    src: "/projects/1888-delphine/living-room-staged.jpg",
    alt: "1888 Delphine living room with virtually staged neutral furniture and natural light",
    emptySrc: "/projects/1888-delphine/living-room-empty.jpg",
    emptyAlt: "1888 Delphine empty living room showing refinished red oak floors and large windows",
  },
  {
    src: "/projects/1888-delphine/kitchen-wide.jpg",
    alt: "Wide view of the remodeled 1888 Delphine kitchen with white cabinetry, quartz island, and pendant lighting",
  },
  {
    src: "/projects/1888-delphine/kitchen-island-detail.jpg",
    alt: "Close-up of the 1888 Delphine kitchen island with veined quartz countertop, stainless hood, and tile backsplash",
  },
  {
    src: "/projects/1888-delphine/kitchen-appliances.jpg",
    alt: "1888 Delphine kitchen with stainless steel appliances, white shaker cabinets, and gold hardware",
  },
  {
    src: "/projects/1888-delphine/kitchen-island-sink.jpg",
    alt: "1888 Delphine kitchen island sink with quartz countertop and brass faucet",
  },
  {
    src: "/projects/1888-delphine/den-staged.jpg",
    alt: "1888 Delphine vaulted den with exposed brick accent wall, virtually staged with leather chair, sofa, and media console",
    emptySrc: "/projects/1888-delphine/den-empty.jpg",
    emptyAlt: "1888 Delphine empty den showing exposed brick accent wall, vaulted ceiling, and refinished hardwood floors",
  },
  {
    src: "/projects/1888-delphine/den-reverse-view.jpg",
    alt: "1888 Delphine den reverse view showing the brick accent wall, vaulted ceiling, and natural light from corner windows",
  },
  {
    src: "/projects/1888-delphine/bedroom-staged.jpg",
    alt: "1888 Delphine bedroom with virtually staged mid-century furniture",
    emptySrc: "/projects/1888-delphine/bedroom-empty.jpg",
    emptyAlt: "1888 Delphine bedroom empty showing refinished hardwood floors and fresh paint",
  },
  {
    src: "/projects/1888-delphine/primary-bedroom.jpg",
    alt: "1888 Delphine primary bedroom with refinished hardwood floors, en-suite bathroom access, and large picture window",
  },
  {
    src: "/projects/1888-delphine/bedroom-3.jpg",
    alt: "1888 Delphine third bedroom with double window overlooking the front yard and refinished red oak floors",
  },
  {
    src: "/projects/1888-delphine/bathroom-wide.jpg",
    alt: "1888 Delphine primary bathroom wide view with double vanity, walk-in shower, and black marble flooring",
  },
  {
    src: "/projects/1888-delphine/bathroom-vanity.jpg",
    alt: "1888 Delphine primary bathroom double vanity with quartz countertop, brass mirrors, and modern sconces",
  },
  {
    src: "/projects/1888-delphine/bathroom-shower-green.jpg",
    alt: "1888 Delphine walk-in shower with green stacked tile, black marble accents, and rainfall shower head",
  },
  {
    src: "/projects/1888-delphine/bathroom-shower-marble.jpg",
    alt: "Detail of the 1888 Delphine shower wall featuring black veined marble tile and built-in niche",
  },
  {
    src: "/projects/1888-delphine/closet.jpg",
    alt: "1888 Delphine closet with built-in shelving, hanging rods, and black marble tile floor",
  },
  {
    src: "/projects/1888-delphine/basement-stairs.jpg",
    alt: "1888 Delphine finished basement stairs with stained wood treads, white risers, and wood-look tile flooring",
  },
  {
    src: "/projects/1888-delphine/basement-rec-area.jpg",
    alt: "1888 Delphine open finished basement recreation area with recessed lighting, fresh paint, and wood-look tile floors",
  },
  {
    src: "/projects/1888-delphine/basement-hallway.jpg",
    alt: "1888 Delphine finished basement hallway with new doors, trim, and wood-look tile flooring",
  },
  {
    src: "/projects/1888-delphine/basement-bedroom-1.jpg",
    alt: "1888 Delphine finished basement bedroom with natural light, fresh neutral paint, and wood-look tile floors",
  },
  {
    src: "/projects/1888-delphine/basement-bedroom-2.jpg",
    alt: "1888 Delphine finished basement bedroom with double-door closet and new interior doors",
  },
  {
    src: "/projects/1888-delphine/basement-bedroom-3.jpg",
    alt: "1888 Delphine finished basement bedroom with two large windows and wood-look tile flooring",
  },
  {
    src: "/projects/1888-delphine/basement-bathroom-marble.jpg",
    alt: "1888 Delphine finished basement bathroom with marble-tile walk-in shower, gray vanity, and quartz countertop",
  },
  {
    src: "/projects/1888-delphine/basement-bathroom-tub.jpg",
    alt: "1888 Delphine finished basement bathroom with tub-shower combo, arched mirror, and quartz vanity",
  },
  {
    src: "/projects/1888-delphine/basement-laundry.jpg",
    alt: "1888 Delphine finished basement laundry room with washer and dryer hookups and marble-look tile floor",
  },
];

export const projects: Project[] = [
  {
    id: "1888-delphine",
    title: "1888 Delphine",
    description: "Full renovation of a classic Atlanta ranch home featuring a remodeled chef's kitchen with quartz countertops, refinished red oak floors, a fully finished basement with two bedrooms and two baths, fresh interior and exterior paint, and updated landscaping.",
    thumbnail: "/projects/1888-delphine/exterior-1.jpg",
    images: delphineImages,
  },
  {
    id: "2958-valley-ridge",
    title: "2958 Valley Ridge",
    description: "Full-scope renovation project at 2958 Valley Ridge.",
    thumbnail: "/placeholder.svg",
    images: [],
  },
  {
    id: "misc",
    title: "Miscellaneous Projects",
    description: "A collection of our past construction, roofing, and remodeling work across Atlanta.",
    thumbnail: miscImages[0].src,
    images: miscImages,
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
