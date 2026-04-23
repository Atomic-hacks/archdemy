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
  duration?: string;
  timeline?: { label: string; date: string }[];
  currentPhase?: number;
  scopeDetail?: string;
  structure?: string;
  facade?: string;
  contractor?: string;
};

export const projects: Project[] = [
  {
    slug: "custom-retail-display-units",
    title: "Kemi Atelier Flagship",
    location: "Miami, FL",
    completed: "2024",
    category: "Retail",
    size: "4,200 Sq Ft.",
    service: "Concept Design",
    client: "Kemi Oduya",
    description:
      "A fashion-forward retail flagship built around curved plaster volumes, recessed niches, and a double-height central fitting room.",
    intro: "A new retail language for a growing luxury brand.",
    overview:
      "The brief was clear: create a store that sells without selling. Every surface, threshold, and material choice was made to slow the customer down — to make them linger, touch, and feel. The result is a space where the product and the architecture are inseparable.",
    vision:
      "We moved away from the conventional grid-and-rail retail model entirely. Instead, curved plaster walls create a sequence of intimate alcoves, each dressed differently depending on the collection it holds. The double-height fitting room at the rear becomes a destination in itself — a room worth the walk.",
    quote:
      "A store should feel like an invitation, not an instruction. Every corner of this space was designed to reward curiosity.",
    features: [
      "Curved plaster wall system with integrated recessed display niches.",
      "Double-height central fitting room with skylight and full-height mirror.",
      "Bespoke terrazzo floor with embedded brand pattern — poured in situ.",
      "Modular hanging system concealed within ceiling track for seasonal flexibility.",
      "Warm tungsten accent lighting tuned to flatter both product and skin tone.",
    ],
    heroImage: "/house1.jpg",
    detailImage: "/work5.jpg",
    gallery: ["/house2.jpg", "/work4.jpg", "/house4.jpg", "/work1.jpg"],
    duration: "8 months",
    timeline: [
      { label: "Brief", date: "Mar 2023" },
      { label: "Concept", date: "May 2023" },
      { label: "Build", date: "Sep 2023" },
      { label: "Launch", date: "Feb 2024" },
    ],
    currentPhase: 3,
    scopeDetail: "Full interior concept + FF&E",
    structure: "Existing steel frame",
    facade: "Painted render + bronze-framed glazing",
    contractor: "Axiom Retail Build",
  },
  {
    slug: "urban-loft-transformation",
    title: "Harbour Boutique Hotel",
    location: "San Francisco, CA",
    completed: "2024",
    category: "Hospitality",
    size: "12,380 Sq Ft.",
    service: "Interior Design",
    client: "Daniel Reeves",
    description:
      "Eighteen individually designed suites drawing from the city's waterfront history, combining raw concrete with hand-stitched leather and aged brass.",
    intro: "A boutique hotel with a strong point of view.",
    overview:
      "The building had been a working warehouse for sixty years. Rather than erasing that history, the design leans into it — exposed concrete ceilings, original steel columns, and industrial-scale windows remain, set against a new interior language of warmth, craft, and considered luxury.",
    vision:
      "Each of the eighteen suites is designed as a distinct room, not a repeated module. Guests return because no two stays feel the same. Material selections were drawn from the Bay Area's maritime and manufacturing heritage — rope, bronze, blackened steel, and pale oak throughout.",
    quote:
      "The building told us exactly what it wanted to be. Our job was to listen carefully and not get in the way.",
    features: [
      "18 individually designed guest suites, no two identical in layout or palette.",
      "Retained original concrete structure and steel columns as primary design features.",
      "Bespoke joinery programme — all casework designed and fabricated in-house.",
      "Rooftop bar with retractable glazed canopy and views across the bay.",
      "Restaurant on ground floor with open kitchen and 60-cover dining room.",
      "Layered lighting strategy across all zones — circadian-tuned in guest rooms.",
    ],
    heroImage: "/work3.jpg",
    detailImage: "/work2.jpg",
    gallery: ["/work1.jpg", "/house4.jpg", "/work4.jpg", "/const1.jpg"],
    duration: "22 months",
    timeline: [
      { label: "Brief", date: "Jan 2022" },
      { label: "Design", date: "Apr 2022" },
      { label: "Build", date: "Nov 2022" },
      { label: "Opening", date: "Sep 2024" },
    ],
    currentPhase: 3,
    scopeDetail: "Full interior design + FF&E procurement",
    structure: "Retained concrete + steel frame",
    facade: "Existing brick — cleaned and repointed",
    contractor: "Meridian Hospitality Group",
  },
  {
    slug: "luxury-condominium-development",
    title: "Nwosu Penthouse",
    location: "San Diego, CA",
    completed: "2023",
    category: "Residential",
    size: "3,820 Sq Ft.",
    service: "Interior Design",
    client: "Sophia Carter",
    description:
      "A duplex penthouse refitted with bespoke cabinetry, honed stone surfaces, and a panoramic dining volume that dissolves into the city skyline.",
    intro: "A home calibrated for calm above the city.",
    overview:
      "The existing penthouse was structurally sound but aesthetically dated — a series of disconnected rooms with no sense of cohesion or flow. The renovation removed all non-structural partitions, reorganising the floor plan around a single continuous living level that opens onto a wraparound terrace.",
    vision:
      "We designed inward from the view. The panorama is the hero — every room is oriented toward it, and every finish was chosen to complement rather than compete with it. Stone, pale oak, and aged plaster sit quietly so that the sky takes the foreground.",
    quote:
      "A penthouse should feel like the city is a painting hung on every wall. Everything else should step back.",
    features: [
      "Full structural reconfiguration — all non-load-bearing walls removed.",
      "Bespoke kitchen in honed Calacatta marble and brushed nickel.",
      "Wraparound terrace with seamless threshold detail and built-in seating.",
      "Master suite with dressing room, freestanding bath, and city-facing window wall.",
      "Integrated AV and home automation throughout.",
    ],
    heroImage: "/house4.jpg",
    detailImage: "/house3.jpg",
    gallery: ["/work2.jpg", "/house1.jpg", "/work5.jpg", "/work4.jpg"],
    duration: "11 months",
    timeline: [
      { label: "Survey", date: "Dec 2021" },
      { label: "Design", date: "Feb 2022" },
      { label: "Fit-out", date: "Jun 2022" },
      { label: "Handover", date: "Jan 2023" },
    ],
    currentPhase: 3,
    scopeDetail: "Full interior renovation + FF&E",
    structure: "Reinforced concrete — existing",
    facade: "Floor-to-ceiling glazing retained",
    contractor: "Pacific Coast Interiors",
  },
  {
    slug: "luxury-resort",
    title: "Koa Retreat, Maui",
    location: "Honolulu, HI",
    completed: "2024",
    category: "Hospitality",
    size: "28,600 Sq Ft.",
    service: "Hospitality Design",
    client: "Mila Bennett",
    description:
      "A 24-villa resort designed around the volcanic landscape — using lava stone, reclaimed koa timber, and open-air living to create a deeply rooted Hawaiian retreat.",
    intro: "Architecture that belongs to its landscape.",
    overview:
      "The resort occupies a two-hectare site on Maui's south coast. The design brief was to build something that felt as though it had always been there — that the landscape had grown up around it rather than been cleared for it. Each villa is sited to maximise privacy, natural ventilation, and connection to the ocean.",
    vision:
      "We worked with the volcanic terrain rather than flattening it. Villas step down the hillside following existing contours, connected by stone pathways that wind through native planting. Materials were sourced locally wherever possible — lava stone walls, reclaimed timber ceilings, and handwoven textiles from island artisans.",
    quote:
      "The most powerful design move we made was deciding what not to build. The landscape does the rest.",
    features: [
      "24 individually sited villas — each with private plunge pool and outdoor shower.",
      "All structures set below the treeline to preserve the natural skyline.",
      "Lava stone wall construction with thermal mass for passive climate control.",
      "Reclaimed koa timber sourced from certified island suppliers.",
      "Farm-to-table restaurant with open kitchen and outdoor dining terrace.",
      "Arrival sequence designed as a 400m walking journey through native garden.",
    ],
    heroImage: "/work4.jpg",
    detailImage: "/house2.jpg",
    gallery: ["/work1.jpg", "/house3.jpg", "/const1.jpg", "/house4.jpg"],
    duration: "30 months",
    timeline: [
      { label: "Master plan", date: "Feb 2021" },
      { label: "Design", date: "Aug 2021" },
      { label: "Construction", date: "Mar 2022" },
      { label: "Opening", date: "Sep 2024" },
    ],
    currentPhase: 3,
    scopeDetail: "Master plan + full hospitality design",
    structure: "Load-bearing lava stone + timber",
    facade: "Lava stone + reclaimed koa timber",
    contractor: "Ohana Construction Hawaii",
  },
  {
    slug: "adeyemi-private-villa",
    title: "Adeyemi Private Villa",
    location: "Lekki, Lagos",
    completed: "2024",
    category: "Residential",
    size: "820 Sq M.",
    service: "Architecture",
    client: "Private",
    description:
      "A four-level tropical residence built around a central courtyard, designed to balance generous hospitality with quiet family privacy.",
    intro: "A home grown from the ground it sits on.",
    overview:
      "The brief called for a house that could host large gatherings without sacrificing the calm of daily family life. Every public room opens toward a central courtyard with a reflecting pool, dissolving the boundary between interior and garden. Private zones — the master suite, children's bedrooms, and a small library — are sequenced on upper levels, away from the social ground floor.",
    vision:
      "Material selection was anchored by a palette of Nigerian laterite stone, hand-planed iroko timber, and honed white marble. The staircase spine rises through all four levels as a vertical datum — its open risers letting air and light cascade downward. The house breathes as much as it shelters.",
    quote:
      "We wanted the house to feel as though it had grown from the ground it sits on — not placed upon it.",
    features: [
      "Central courtyard with mature planting and a 14m lap-length reflecting pool.",
      "Bespoke iroko joinery throughout — kitchen, library, and master suite.",
      "Passive ventilation strategy reducing mechanical cooling load by approximately 40%.",
      "Integrated smart home system with scene-based lighting across all zones.",
      "Rooftop entertaining terrace with cantilevered shade structure.",
      "Fully separated staff quarters and service circulation.",
    ],
    heroImage: "/house1.jpg",
    detailImage: "/work5.jpg",
    gallery: ["/house2.jpg", "/work4.jpg", "/house4.jpg", "/work1.jpg"],
    duration: "14 months",
    timeline: [
      { label: "Brief", date: "Jan 2023" },
      { label: "Design", date: "Apr 2023" },
      { label: "Build", date: "Aug 2023" },
      { label: "Handover", date: "Feb 2024" },
    ],
    currentPhase: 3,
    scopeDetail: "Full architecture + interior design",
    structure: "Reinforced concrete frame",
    facade: "Laterite stone + louvred teak screens",
    contractor: "Meridian Build Ltd",
  },
  {
    slug: "zeta-financial-hq",
    title: "Zeta Financial HQ",
    location: "Victoria Island, Lagos",
    completed: "2025",
    category: "Commercial",
    size: "6,400 Sq M.",
    service: "Interior Design",
    client: "Zeta Capital Partners",
    description:
      "A headquarters designed around focus and collaboration — open trading floors softened by acoustic panels, breakout terraces, and a considered material language.",
    intro: "A workplace that performs as precisely as the people in it.",
    overview:
      "Zeta occupies four floors of a newly completed tower on Victoria Island. The brief was to create a workplace that could attract and retain talent at an international level — one that balanced the intensity of financial work with restorative space and a clear sense of identity.",
    vision:
      "We divided each floor into three bands: a deep-focus zone with acoustic partitioning along the core, a collaborative middle zone with flexible furniture and writable surfaces, and a perimeter zone with built-in seating and views. Movement between zones is encouraged by the layout rather than managed by policy.",
    quote:
      "The best workplaces don't tell people how to work. They make every way of working feel supported.",
    features: [
      "Three-zone floor plan — focus, collaboration, and social — repeated across all levels.",
      "Acoustic ceiling panels and freestanding screens in deep-focus zones.",
      "Breakout terrace on each floor with planting and informal seating.",
      "Reception and client suite on ground floor with separate controlled access.",
      "All materials specified for longevity and ease of maintenance in a high-use environment.",
    ],
    heroImage: "/work3.jpg",
    detailImage: "/work2.jpg",
    gallery: ["/house1.jpg", "/work5.jpg", "/house4.jpg", "/const1.jpg"],
    duration: "10 months",
    timeline: [
      { label: "Brief", date: "Mar 2024" },
      { label: "Design", date: "May 2024" },
      { label: "Fit-out", date: "Sep 2024" },
      { label: "Handover", date: "Jan 2025" },
    ],
    currentPhase: 3,
    scopeDetail: "Full interior design + FF&E",
    structure: "Existing concrete core — tenant fit-out",
    facade: "Existing tower glazing retained",
    contractor: "BuildRight Nigeria Ltd",
  },
  {
    slug: "okafor-family-residence",
    title: "Okafor Family Residence",
    location: "Magodo, Lagos",
    completed: "2022",
    category: "Residential",
    size: "510 Sq M.",
    service: "Architecture",
    client: "Chukwuemeka Okafor",
    description:
      "A family home rebuilt around indoor-outdoor living, anchored by a shaded courtyard, terrazzo floors, and a deep-roofed covered terrace for year-round use.",
    intro: "A home built for how a Nigerian family actually lives.",
    overview:
      "The existing building was structurally compromised and cosmetically dated. Rather than renovate, the decision was made to rebuild entirely on the same footprint — allowing a complete rethinking of the plan around the family's way of life: large extended family gatherings, children's spaces that open to the garden, and a kitchen at the heart of everything.",
    vision:
      "The covered terrace is the emotional centre of the house. Shaded, cross-ventilated, and directly connected to both the kitchen and the garden, it functions as an outdoor room for most of the year. All public spaces radiate from it. Private bedrooms are set back from this social core, on an upper level with their own quieter terrace.",
    quote:
      "We stopped trying to make a house that looked international and started designing one that understood its place.",
    features: [
      "Full demolition and rebuild on original footprint.",
      "Covered terrace as primary social space — 60 sqm, fully cross-ventilated.",
      "Hand-poured terrazzo floors throughout ground level in custom colour mix.",
      "Kitchen positioned at centre of plan with direct access to terrace and dining.",
      "Children's bedroom wing with dedicated garden access and external play zone.",
      "Rainwater harvesting integrated into roof drainage and irrigation systems.",
    ],
    heroImage: "/house4.jpg",
    detailImage: "/house3.jpg",
    gallery: ["/work2.jpg", "/house1.jpg", "/work5.jpg", "/const1.jpg"],
    duration: "16 months",
    timeline: [
      { label: "Brief", date: "Nov 2020" },
      { label: "Design", date: "Feb 2021" },
      { label: "Build", date: "Jun 2021" },
      { label: "Handover", date: "Oct 2022" },
    ],
    currentPhase: 3,
    scopeDetail: "Full architecture + interior design",
    structure: "New reinforced concrete frame",
    facade: "Painted blockwork + louvred timber screen",
    contractor: "Greenfield Builders Nigeria",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
