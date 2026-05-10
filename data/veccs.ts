export const veccs = [
  {
    name: "Military Skills",
    slug: "military-skills",
    description: "Training and field-based merchandise for Military Skills.",
    image: "/images/collections/veccs/future-of-war.jpg",
    longDescription:
      "Military Skills merchandise collection including training apparel, field-ready gear, and items designed to support practical learning and operational activities.",
  },
  {
    name: "Adventure Training",
    slug: "adventure-training",
    description: "Apparel and gear for Adventure Training activities.",
    image: "/images/collections/veccs/future-of-war.jpg",
    longDescription:
      "Adventure Training merchandise collection including apparel and equipment suited for outdoor activities, expeditions, and physically demanding training environments.",
  },
  {
    name: "SIA",
    slug: "sisters-in-arms",
    description: "Merchandise supporting the Sisters in Arms community.",
    image: "/images/collections/veccs/future-of-war.jpg",
    longDescription:
      "Sisters in Arms merchandise collection including apparel and items that promote community, inclusion, and representation across the academy.",
  },
  {
    name: "Band",
    slug: "band",
    description: "Official apparel and merchandise for the ADFA Band.",
    image: "/images/collections/veccs/band.jpg",
    longDescription:
      "Band merchandise collection including apparel and items representing the academy band and its role in ceremonial and formal events.",
  },
  {
    name: "Future Of War",
    slug: "future-of-war",
    description: "Merchandise linked to Future of War initiatives.",
    image: "/images/collections/veccs/future-of-war.jpg",
    longDescription:
      "Future of War merchandise collection including apparel and items tied to innovation, strategic thinking, and modern defence concepts.",
  },
  {
    name: "Performing Arts Company",
    slug: "performing-arts-company",
    description: "Merchandise for Performing Arts Company productions.",
    image: "/images/collections/veccs/performing-arts.jpg",
    longDescription:
      "Performing Arts Company merchandise collection including apparel and items supporting theatre, performance, and creative expression within the academy.",
  },
  {
    name: "Precision Drill Team",
    slug: "precision-drill-team",
    description: "Apparel and items for the Precision Drill Team.",
    image: "/images/collections/veccs/precision-drill.jpg",
    longDescription:
      "Precision Drill Team merchandise collection including apparel and items representing discipline, coordination, and ceremonial excellence.",
  },
  {
    name: "Muddies",
    slug: "muddies",
    description: "Merchandise for Muddies events and activities.",
    image: "/images/collections/veccs/muddies.jpg",
    longDescription:
      "Muddies merchandise collection including apparel and items associated with endurance events, challenges, and team-based activities.",
  },
  {
    name: "International Students Association",
    slug: "international-students-association",
    description: "Merchandise representing international students at ADFA.",
    image: "/images/collections/veccs/international-students.jpg",
    longDescription:
      "International Students Association merchandise collection including apparel and items celebrating diversity, cultural exchange, and the global community within the academy.",
  },
  {
    name: "Aviation Club",
    slug: "aviation-club",
    description: "Aviation-focused apparel and club merchandise.",
    image: "/images/collections/veccs/aviation.jpg",
    longDescription:
      "Aviation Club merchandise collection including apparel and items reflecting aviation interests, training, and aviation-related activities at the academy.",
  },
];

export function getVeccBySlug(slug: string) {
  return veccs.find((vecc) => vecc.slug === slug);
}
