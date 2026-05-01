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
  /** Optional alternate image shown on hover of the portfolio thumbnail */
  thumbnailHover?: string;
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
    src: "/projects/1888-delphine/basement-entry.jpg",
    alt: "1888 Delphine finished basement entry landing with stained wood stair railing and wood-look tile floor",
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
    src: "/projects/1888-delphine/basement-bedroom-4.jpg",
    alt: "1888 Delphine finished basement bedroom with double-door closet, window, and wood-look tile floors",
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
  {
    src: "/projects/1888-delphine/back-deck.jpg",
    alt: "1888 Delphine rear deck with freshly stained dark railings overlooking a wooded backyard",
  },
  {
    src: "/projects/1888-delphine/exterior-side.jpg",
    alt: "1888 Delphine side exterior view showing brick facade, painted foundation, and new stained deck stairs",
  },
  {
    src: "/projects/1888-delphine/exterior-rear.jpg",
    alt: "1888 Delphine rear exterior showing the brick split-level facade, basement entry door, and new dark deck",
  },
  {
    src: "/projects/1888-delphine/exterior-backyard.jpg",
    alt: "1888 Delphine wooded backyard view showing the rear of the home and surrounding mature trees",
  },
  {
    src: "/projects/1888-delphine/exterior-wooded-lot.jpg",
    alt: "1888 Delphine wooded lot view from the back of the property looking toward the home",
  },
];

const valleyRidgeImages: ProjectImage[] = [
  {
    src: "/projects/2958-valley-ridge/exterior-front-1.jpg",
    alt: "2958 Valley Ridge mid-century ranch front exterior with white painted brick, stacked-stone accents, and dark trim",
  },
  {
    src: "/projects/2958-valley-ridge/exterior-driveway.jpg",
    alt: "2958 Valley Ridge driveway view showing the renovated ranch with new french doors, white brick, and dark roofline",
  },
  {
    src: "/projects/2958-valley-ridge/exterior-side.jpg",
    alt: "2958 Valley Ridge side exterior view showing the full length of the renovated ranch home with new windows and trim",
  },
  {
    src: "/projects/2958-valley-ridge/entry-porch-angle.jpg",
    alt: "2958 Valley Ridge covered front entry with stacked stone columns, dark front door, and recessed porch lighting",
  },
  {
    src: "/projects/2958-valley-ridge/entry-porch-front.jpg",
    alt: "2958 Valley Ridge front entry detail with leaded glass dark door, stacked stone surround, and modern brick step",
  },
  {
    src: "/projects/2958-valley-ridge/entry-interior.jpg",
    alt: "2958 Valley Ridge interior entry view with new wood-look flooring, recessed lighting, and french doors to the rear deck",
  },
  {
    src: "/projects/2958-valley-ridge/front-room-windows.jpg",
    alt: "2958 Valley Ridge front room with picture windows, modern ceiling fan, recessed lighting, and new wood-look flooring",
  },
  {
    src: "/projects/2958-valley-ridge/great-room-open.jpg",
    alt: "2958 Valley Ridge open great room flowing to the kitchen and rear french doors, with fresh white walls and wood-look floors",
  },
  {
    src: "/projects/2958-valley-ridge/living-room-staged.jpg",
    alt: "2958 Valley Ridge living room virtually staged with leather sofa, gray accent chair, console, and area rug",
    emptySrc: "/projects/2958-valley-ridge/living-room-empty.jpg",
    emptyAlt: "2958 Valley Ridge empty living room showing wood-look flooring, large windows, ceiling fan, and fresh white paint",
  },
  {
    src: "/projects/2958-valley-ridge/kitchen-dining-wide.jpg",
    alt: "2958 Valley Ridge open kitchen and dining area with white shaker cabinets, stainless hood, gray subway tile backsplash, and french doors to the rear deck",
  },
  {
    src: "/projects/2958-valley-ridge/kitchen-dining-staged.jpg",
    alt: "2958 Valley Ridge kitchen and dining area virtually staged with round wood table, neutral chairs, and abstract wall art",
    emptySrc: "/projects/2958-valley-ridge/kitchen-dining-empty.jpg",
    emptyAlt: "2958 Valley Ridge empty kitchen and dining area showing white cabinets, gray subway backsplash, quartz counters, and wood-look flooring",
  },
  {
    src: "/projects/2958-valley-ridge/kitchen-sink-window.jpg",
    alt: "2958 Valley Ridge kitchen detail with white shaker cabinets, quartz countertops, gray subway tile backsplash, and stainless hood vent over the window",
  },
  {
    src: "/projects/2958-valley-ridge/kitchen-hood-side.jpg",
    alt: "2958 Valley Ridge kitchen side view showing the stainless hood, gray subway backsplash, and pull-down faucet at the prep sink",
  },
  {
    src: "/projects/2958-valley-ridge/dining-french-doors.jpg",
    alt: "2958 Valley Ridge dining nook with french doors opening to the rear deck and adjacent kitchen pass-through",
  },
  {
    src: "/projects/2958-valley-ridge/hallway.jpg",
    alt: "2958 Valley Ridge bedroom hallway with refinished hardwood floors, fresh white paint, and natural light from the rear bedroom",
  },
  {
    src: "/projects/2958-valley-ridge/bathroom-tub.jpg",
    alt: "2958 Valley Ridge full bathroom with white subway tile tub surround, granite vanity countertop, brushed nickel fixtures, and arched mirror",
  },
  {
    src: "/projects/2958-valley-ridge/sunroom-french-doors.jpg",
    alt: "2958 Valley Ridge enclosed sunroom with painted white brick walls, french doors to the backyard, and original concrete floor",
  },
  {
    src: "/projects/2958-valley-ridge/sunroom-kitchen-access.jpg",
    alt: "2958 Valley Ridge sunroom showing the side door access into the renovated kitchen and additional windows to the side yard",
  },
  {
    src: "/projects/2958-valley-ridge/primary-bedroom-staged.jpg",
    alt: "2958 Valley Ridge primary bedroom virtually staged with mid-century walnut bed, olive bedding, matching nightstands, and abstract art",
    emptySrc: "/projects/2958-valley-ridge/primary-bedroom-empty.jpg",
    emptyAlt: "2958 Valley Ridge empty primary bedroom with fresh white paint, new neutral carpet, modern ceiling fan, and corner windows",
  },
  {
    src: "/projects/2958-valley-ridge/primary-bedroom-barn-door.jpg",
    alt: "2958 Valley Ridge primary bedroom showing the sliding barn door to the en-suite bathroom and bright corner windows",
  },
  {
    src: "/projects/2958-valley-ridge/primary-bath-wide.jpg",
    alt: "2958 Valley Ridge primary bathroom with walk-in tile shower, double vanity, quartz countertops, and modern sconce lighting",
  },
  {
    src: "/projects/2958-valley-ridge/primary-bath-shower.jpg",
    alt: "2958 Valley Ridge primary bathroom walk-in shower with large-format stone tile, rainfall and handheld shower heads, and a window",
  },
  {
    src: "/projects/2958-valley-ridge/primary-bath-vanity.jpg",
    alt: "2958 Valley Ridge primary bathroom double vanity with white shaker cabinets, quartz countertop, dual mirrors, and brushed nickel sconces",
  },
  {
    src: "/projects/2958-valley-ridge/primary-closet.jpg",
    alt: "2958 Valley Ridge primary suite walk-in closet with built-in shelving and tile flooring",
  },
  {
    src: "/projects/2958-valley-ridge/bedroom-2.jpg",
    alt: "2958 Valley Ridge secondary bedroom with double-door closet, modern ceiling fan, and fresh white walls",
  },
  {
    src: "/projects/2958-valley-ridge/bedroom-3.jpg",
    alt: "2958 Valley Ridge third bedroom with two windows, neutral carpet, and a modern ceiling fan",
  },
  {
    src: "/projects/2958-valley-ridge/basement-rec.jpg",
    alt: "2958 Valley Ridge finished basement recreation room with new wood-look flooring, recessed lighting, two ceiling fans, and stairs to the main level",
  },
  {
    src: "/projects/2958-valley-ridge/basement-stairs.jpg",
    alt: "2958 Valley Ridge basement stairwell with painted black treads, white risers, and open sightlines to additional finished basement living areas",
  },
  {
    src: "/projects/2958-valley-ridge/basement-living.jpg",
    alt: "2958 Valley Ridge basement living area with two modern ceiling fans, recessed lighting, double closet, and durable wood-look plank flooring",
  },
  {
    src: "/projects/2958-valley-ridge/basement-open-area.jpg",
    alt: "2958 Valley Ridge open basement flex space with bright white walls, recessed lighting, ceiling fan, and continuous wood-look flooring",
  },
  {
    src: "/projects/2958-valley-ridge/basement-hallway.jpg",
    alt: "2958 Valley Ridge basement hallway with modern ceiling fan, double closet doors, and access to additional bedrooms and storage",
  },
  {
    src: "/projects/2958-valley-ridge/basement-laundry.jpg",
    alt: "2958 Valley Ridge basement laundry room with marble-look tile flooring, washer and dryer hookups, and double doors",
  },
  {
    src: "/projects/2958-valley-ridge/basement-bedroom-1.jpg",
    alt: "2958 Valley Ridge basement bedroom with new ceiling fan, recessed lighting, fresh white walls, and wood-look plank flooring",
  },
  {
    src: "/projects/2958-valley-ridge/basement-bathroom.jpg",
    alt: "2958 Valley Ridge basement bathroom with white shaker vanity, granite countertop, framed mirror, and walk-in marble-tiled shower",
  },
  {
    src: "/projects/2958-valley-ridge/basement-shower.jpg",
    alt: "2958 Valley Ridge basement walk-in shower detail with marble-look tile walls, rainfall showerhead, and hexagon mosaic floor",
  },
  {
    src: "/projects/2958-valley-ridge/basement-bedroom-2.jpg",
    alt: "2958 Valley Ridge basement bedroom with window, ceiling fan, recessed lighting, and access to a private closet",
  },
  {
    src: "/projects/2958-valley-ridge/basement-bedroom-3.jpg",
    alt: "2958 Valley Ridge basement bedroom with bright natural light from a window, ceiling fan, and fresh wood-look flooring",
  },
  {
    src: "/projects/2958-valley-ridge/basement-bedroom-4.jpg",
    alt: "2958 Valley Ridge basement bedroom with private exterior door to the backyard, additional window for natural light, and modern ceiling fan",
  },
  {
    src: "/projects/2958-valley-ridge/basement-bedroom-5.jpg",
    alt: "2958 Valley Ridge basement bedroom with double-door closet, ceiling fan, and view to the adjacent hallway and bathroom",
  },
  {
    src: "/projects/2958-valley-ridge/exterior-rear-angle.jpg",
    alt: "2958 Valley Ridge rear exterior showing newly painted white brick, freshly built black deck, and walk-out basement door on a wooded sloped lot",
  },
  {
    src: "/projects/2958-valley-ridge/exterior-rear.jpg",
    alt: "2958 Valley Ridge straight-on rear exterior view featuring the new black deck, French doors, and refreshed white brick siding",
  },
  {
    src: "/projects/2958-valley-ridge/exterior-deck-side.jpg",
    alt: "2958 Valley Ridge side exterior view of the new elevated deck with black railings, stairs, and walk-out basement entry",
  },
  {
    src: "/projects/2958-valley-ridge/back-deck.jpg",
    alt: "2958 Valley Ridge new back deck with charcoal composite decking, black spindle railings, and French doors leading into the sunroom",
  },
  {
    src: "/projects/2958-valley-ridge/back-deck-view.jpg",
    alt: "2958 Valley Ridge back deck showing the wooded backyard view from the new black-railed entertaining space",
  },
  {
    src: "/projects/2958-valley-ridge/backyard-from-deck.jpg",
    alt: "2958 Valley Ridge backyard view from the deck showing newly graded lawn, privacy fencing, and mature surrounding trees",
  },
  {
    src: "/projects/2958-valley-ridge/backyard.jpg",
    alt: "2958 Valley Ridge spacious backyard with new privacy fencing, freshly seeded lawn, and mature wooded perimeter",
  },
  {
    src: "/projects/2958-valley-ridge/exterior-hvac.jpg",
    alt: "2958 Valley Ridge side yard with two new Goodman HVAC condensers in protective cages alongside the freshly painted white brick exterior",
  },
];

export const projects: Project[] = [
  {
    id: "1888-delphine",
    title: "1888 Delphine",
    description: "Full renovation of a classic Atlanta ranch home featuring a remodeled chef's kitchen with quartz countertops, refinished red oak floors, a fully finished basement with two bedrooms and two baths, fresh interior and exterior paint, and updated landscaping.",
    thumbnail: "/projects/1888-delphine/exterior-3-entry.jpg",
    thumbnailHover: "/projects/1888-delphine/kitchen-appliances.jpg",
    images: delphineImages,
  },
  {
    id: "2958-valley-ridge",
    title: "2958 Valley Ridge",
    description: "Mid-century ranch renovation featuring a freshly painted white brick exterior with stacked-stone accents, dark trim and gutters, refinished interiors with new wood-look flooring throughout, recessed lighting, and an open-concept living area opening to a rear deck.",
    thumbnail: "/projects/2958-valley-ridge/entry-porch-angle.jpg",
    thumbnailHover: "/projects/2958-valley-ridge/primary-bath-wide.jpg",
    images: valleyRidgeImages,
  },
  {
    id: "misc",
    title: "Miscellaneous Projects",
    description: "A collection of our past construction, roofing, and remodeling work across Atlanta.",
    thumbnail: miscImages[1].src,
    thumbnailHover: miscImages[0].src,
    images: miscImages,
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
