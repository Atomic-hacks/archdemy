export type Project = {
  slug: string;
  title: string;
  location: string;
  completed: string;
  category: string;
  size: string;
  service: string;
  client: string;
  description: string;
  intro: string;
  overview: string;
  vision: string;
  quote: string;
  features: string[];
  heroImage: string;
  detailImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "custom-retail-display-units",
    title: "Custom Retail Display Units",
    location: "Miami, FL",
    completed: "2024",
    category: "Retail",
    size: "86,640 Sq Ft.",
    service: "Architecture",
    client: "Emily Thompson",
    description:
      "A luxurious residential project featuring contemporary design elements, sustainable materials, and state-of-the-art amenities.",
    intro: "More Details in this Projects.",
    overview:
      "Custom Retail Display Units are crafted to elevate brand presence and create memorable in-store experiences. Designed with both function and aesthetics in mind, these units integrate seamlessly into retail environments, offering a precise blend of visual appeal, brand storytelling, and product accessibility.",
    vision:
      "Every display unit is built with the vision of creating engaging retail touchpoints that reflect the brand's identity while maximizing product visibility. By combining ergonomic planning, high-quality materials, and modular functionality, each unit transforms space into an interactive showcase.",
    quote:
      "Blurring the line between product and presentation, these display units offer a dynamic platform for brands to connect with customers.",
    features: [
      "Tailored design: each unit is aligned with specific brand aesthetics and retail goals.",
      "High-impact visuals: lighting, proportion, and material contrast draw customer attention.",
      "Durable materials: specified to withstand high-traffic daily retail use.",
      "Modular configurations: scalable designs allow flexible rollout across store formats.",
      "Interactive elements: integrated touchpoints encourage engagement and improve customer experience.",
    ],
    heroImage: "/house1.jpg",
    detailImage: "/work5.jpg",
    gallery: ["/house2.jpg", "/work4.jpg", "/house4.jpg", "/work1.jpg"],
  },
  {
    slug: "urban-loft-transformation",
    title: "Urban Loft Transformation",
    location: "San Francisco, CA",
    completed: "2024",
    category: "Hospitality",
    size: "12,380 Sq Ft.",
    service: "Interior Design",
    client: "Daniel Reeves",
    description:
      "Incorporates green technologies for a sustainable workspace.",
    intro: "More Details in this Projects.",
    overview:
      "Urban Loft Transformation reimagines an existing shell into a hospitality-forward environment defined by sculptural forms, warm surfaces, and a stronger connection to daylight.",
    vision:
      "The project pursues a soft, immersive atmosphere where clean geometry and material warmth create a memorable guest experience without visual excess.",
    quote:
      "A disciplined material palette can make hospitality spaces feel both calm and unforgettable.",
    features: [
      "Adaptive reuse strategy that preserves structural value while modernizing experience.",
      "Sustainable systems integrated into the design language rather than treated as add-ons.",
      "Clear circulation planning that improves guest movement and staff efficiency.",
      "Layered lighting strategy that balances ambience with performance.",
    ],
    heroImage: "/work3.jpg",
    detailImage: "/work2.jpg",
    gallery: ["/work1.jpg", "/house4.jpg", "/work4.jpg", "/const1.jpg"],
  },
  {
    slug: "luxury-condominium-development",
    title: "Luxury Condominium Development",
    location: "San Diego, CA",
    completed: "2023",
    category: "Residential",
    size: "38,738 Sq Ft.",
    service: "Project Management",
    client: "Sophia Carter",
    description:
      "A contemporary office space designed to enhance productivity and collaboration.",
    intro: "More Details in this Projects.",
    overview:
      "Luxury Condominium Development explores how restrained architecture can produce a deeply premium living experience through proportion, light, and carefully curated finishes.",
    vision:
      "The design emphasizes privacy, seamless transitions between inside and out, and a calm atmosphere that elevates everyday life.",
    quote:
      "Luxury becomes lasting when architecture prioritizes comfort, clarity, and precision in equal measure.",
    features: [
      "High-value residential planning centered on privacy and views.",
      "Integrated amenity zones that support flexible modern living.",
      "Refined facade composition with minimal but expressive detailing.",
      "Project oversight that protects design intent from concept through delivery.",
    ],
    heroImage: "/house4.jpg",
    detailImage: "/house3.jpg",
    gallery: ["/work2.jpg", "/house1.jpg", "/work5.jpg", "/work4.jpg"],
  },
  {
    slug: "luxury-resort",
    title: "Luxury Resort",
    location: "Honolulu, HI",
    completed: "2024",
    category: "Hospitality",
    size: "12,980 Sq Ft.",
    service: "Hospitality Design",
    client: "Mila Bennett",
    description:
      "A contemporary office space designed to enhance productivity and collaboration.",
    intro: "More Details in this Projects.",
    overview:
      "Luxury Resort pairs generous forms with tactile materials to create a destination experience that feels sculpted, serene, and unmistakably premium.",
    vision:
      "The design seeks a balance between escape and clarity, using architecture to frame landscape, soften transitions, and amplify stillness.",
    quote:
      "The best resort spaces feel effortless, but that calm is always built on rigorous design decisions.",
    features: [
      "Guest-centered planning that maximizes comfort and views.",
      "Material palette selected for warmth, longevity, and climate performance.",
      "Common spaces designed for both social energy and private retreat.",
      "Spatial sequencing that heightens arrival and relaxation moments.",
    ],
    heroImage: "/work4.jpg",
    detailImage: "/house2.jpg",
    gallery: ["/work1.jpg", "/house3.jpg", "/const1.jpg", "/house4.jpg"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
