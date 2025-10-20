export interface Review {
  id: number;
  name: string;
  rating: number;
  text?: string;
  positive?: string;
  services?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Schimmel",
    rating: 5,
    text: "Patrick and his awesome crew came out and expanded our back patio, laid decking, and covered it with a beautiful roof. They were super fast and responsive. It came out better than we could have imagined. This was the second project Patrick and did for us - the first was enclosing an open, unused loft space into a bedroom. We're already planning our next project and are grateful to have a reliable contractor who gets the job done right, on time, and at a competitive rate.",
    positive: "Quality, Professionalism, Value",
  },
  {
    id: 2,
    name: "Nahian Hasan",
    rating: 5,
    text: "We recently used Total Construction and Remodeling for our massive Shower Reconstruction. Patrick was very responsive and was able to get all of my needs met. His team was very professional and courteous while working in my home. I am already planning to use Total C&R again for my next project!",
    positive: "Responsiveness, Value",
    services: "Tile work installation",
  },
  {
    id: 3,
    name: "Jake Levine",
    rating: 5,
    text: "Patrick has done a quite a few projects for me and they always somehow exceed my expectation. He's super communicative, his workers are always super friendly and he is more than reasonably and fair priced. Highly recommend hiring them for any work needed done on the house, and will using Patrick again for any home improvement projects.",
    positive: "Responsiveness, Quality, Professionalism, Value",
  },
  {
    id: 4,
    name: "Cozy Brents",
    rating: 5,
    text: "I've worked with Patrick on countless projects over several years. He and his team are tremendously skilled, prompt and transparent about costs and timelines. Patrick has assisted my team with new construction, remodels and renovations and never disappoints. In my work as a Realtor, I recommend Total Construction to all of my clients.",
  },
  {
    id: 5,
    name: "Jeffrey Faulkner",
    rating: 5,
    text: "Patrick has worked on at least 15 projects for me since 2016. I have never had any issues with any work the he & his crews have done. He is instrumental in making my business run smooth and I consider him my right hand man. We are starting a million dollar project in VA Highlands Jan 2, 2020 and it's already on cruise control because of Patrick. On top of that, my clients instantly felt like he was the guy and emphasized that I was expected to use him on the project!!",
  },
  {
    id: 6,
    name: "M R",
    rating: 5,
    text: "Patrick and his amazing crew replaced our old deck. It looks great! They were super fast and responsive. They do high quality work! Patrick is very honest and professional. I highly recommend and look forward to using Total Construction for future projects!",
    positive: "Responsiveness, Quality, Professionalism, Value",
  },
  {
    id: 7,
    name: "Matthew Revilla",
    rating: 5,
    text: "Great work on both our roof and installing new windows! Patrick (owner) showed up the same night a tree fell on our roof and earned our business right away. We highly recommend Total Construction!",
  },
  {
    id: 8,
    name: "Jan Smits",
    rating: 5,
    text: "I have worked with Patrick and his crew for over 3 years and he is always my first choice for referring contract work of all kinds - big jobs to small. Patrick and Total Construction can handle the very basics from landscaping and pressure washing to detailed tiling, structural work and total renovation projects. There is no one that I'd rather to refer to my clients. Patrick is always professional, reliable and competitively priced and does the work he says he will do. Its rare to find a contractor of this caliber!",
    positive: "Responsiveness, Punctuality, Quality, Professionalism, Value",
    services: "General construction, Remodeling, Paint indoors, Service not listed",
  },
  {
    id: 9,
    name: "Ryan Frengel",
    rating: 5,
    text: "I recently hired Total Construction and remodeling to finish a project of building a mother in law suite above my separate 2 car garage. I initially hired another local construction company which I regret to this day. After Patrick and his crew came in and fixed all the issues that I knew were done totally wrong by the other group. Then he actually had much better ideas on how to get the most out of my space for my investment. I was so happy with his craftsmanship, attention to detail, knowledge and overall genuine care for the project. Total Construction and remodeling does not want to just finish the project at hand they want to earn you as a customer for life like they have with me and my family.",
  },
  {
    id: 10,
    name: "JoJo C",
    rating: 5,
    text: "It doesn't get any better than Total Construction! Patrick and his teams are amazing! They have done several renovations for my family and business over the past three and a half years including additions, full gut jobs, decks, patios and more. I, literally, always make sure I have a project for them to do because I enjoy them and their work so much! Total Construction delivers quality results, timely work, and reasonable pricing. Total Construction has proven expertise and talented construction crews. This company provides excellent service and results.",
    positive: "Responsiveness, Quality, Professionalism, Value",
  },
  {
    id: 11,
    name: "Nikolay Orekhov",
    rating: 5,
    text: "Patrick has been an absolute pleasure to work with. He and his crew have completed numerous projects in our home (covered deck, flagstone patio, outdoor grill/kitchen buildout, outdoor drain system, and some drywall work) and all the jobs exceeded expectations. I could not be happier with Patrick's professionalism and quality of work and gave recommended his services to numerous neighbors, who all turned out to be happy customers. Thanks Patrick!",
    positive: "Responsiveness, Punctuality, Quality, Professionalism, Value",
    services: "General construction, Demolition, Fan installation, Paint indoors, Exterior painting, Drywall repair, Tile work replacement, Service not listed",
  },
  {
    id: 12,
    name: "Chris Weber",
    rating: 5,
    text: "I have known Patrick Vinces for a while and there is no one else I would trust with my construction projects. Among the great qualities he brings are, Extensive home building knowledge and experiences Strong work ethics and integrity Highly skilled and experienced, hard working, conscientious, polite, respectful and dedicated trades people Excellent communication, expectation setting and interaction skills A cost effective approach Rigorous project oversight Impeccable results Chris Weber TridentIntownDevelopers",
  },
  {
    id: 13,
    name: "Mikiel Arnold",
    rating: 5,
    text: "I have used Patrick and team on two separate projects at my place of business. On both occasions they were prompt, professional, clean, and reasonably priced. The most recent visit was during covid and they maintained social distance while using appropriate mouth and nose coverings. I have two projects this summer at my home that I will more than likely entrust them with. Highly recommended!",
    positive: "Responsiveness, Punctuality, Quality, Professionalism, Value",
    services: "Service not listed",
  },
  {
    id: 14,
    name: "Kyle Jackson",
    rating: 5,
    text: "As a realtor I send all of my clients to Patrick, and he's worked on a number of projects in my own home as well! He does great work at a reasonable price. Highly recommended.",
  },
  {
    id: 15,
    name: "Damien Scott",
    rating: 5,
    positive: "Quality, Professionalism, Value",
    services: "Gutter cleaning, General construction, Demolition, Remodeling, Drywall installation, Fan installation, Install flooring, Tile work installation, Plumbing fixture installation, TV mounting, Paint indoors, Exterior painting, Refurbishment, Drywall repair, Fan repair, Repair flooring, Repair water fixtures, Tile work replacement",
  },
];
