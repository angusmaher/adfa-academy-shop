export const clubs = [
  {
    name: "AFL",
    slug: "afl",
    description: "Official merchandise for the ADFA AFL club.",
    image: "/images/collections/clubs/afl.jpg",
    longDescription:
      "AFL club merchandise collection including training apparel, supporter gear, and items representing the ADFA Rams.",
  },
  {
    name: "Basketball",
    slug: "basketball",
    description: "Official merchandise for the ADFA Basketball club.",
    image: "/images/collections/clubs/basketball.jpg",
    longDescription:
      "Basketball club merchandise collection including training gear, apparel, and items representing the ADFA Hawks.",
  },
  {
    name: "Cricket",
    slug: "cricket",
    description: "Official merchandise for the ADFA Cricket club.",
    image: "/images/collections/clubs/cricket.jpg",
    longDescription:
      "Cricket club merchandise collection including training apparel and items representing the ADFA Cougars.",
  },
  {
    name: "Field Hockey",
    slug: "field-hockey",
    description: "Official merchandise for the ADFA Field Hockey club.",
    image: "/images/collections/clubs/field-hockey.jpg",
    longDescription:
      "Field Hockey club merchandise collection including training apparel and items representing the ADFA Bears.",
  },
  {
    name: "MADR",
    slug: "madr",
    description: "Official merchandise for MADR.",
    image: "/images/collections/clubs/madr.jpg",
    longDescription:
      "MADR merchandise collection including apparel and items associated with academy activities and representation.",
  },
  {
    name: "Netball",
    slug: "netball",
    description: "Official merchandise for the ADFA Netball club.",
    image: "/images/collections/clubs/netball.jpg",
    longDescription:
      "Netball club merchandise collection including training apparel and items representing the ADFA Mustangs.",
  },
  {
    name: "Rowing",
    slug: "rowing",
    description: "Official merchandise for the ADFA Rowing club.",
    image: "/images/collections/clubs/rowing.jpg",
    longDescription:
      "Rowing club merchandise collection including training gear, apparel, and items for on and off-water activities.",
  },
  {
    name: "Rugby",
    slug: "rugby",
    description: "Official merchandise for the ADFA Rugby club.",
    image: "/images/collections/clubs/rugby.jpg",
    longDescription:
      "Rugby club merchandise collection including training apparel, supporter gear, and items representing the ADFA Rugby program.",
  },
  {
    name: "Soccer",
    slug: "soccer",
    description: "Official merchandise for the ADFA Soccer club.",
    image: "/images/collections/clubs/soccer.jpg",
    longDescription:
      "Soccer club merchandise collection including training apparel and items representing the ADFA Vikings.",
  },
  {
    name: "Strength & Conditioning",
    slug: "strength-and-conditioning",
    description: "Performance and training apparel for Strength & Conditioning.",
    image: "/images/collections/clubs/afl.jpg",
    longDescription:
      "Strength and Conditioning merchandise collection including training apparel and performance-focused gear supporting physical development programs.",
  },
  {
    name: "Volleyball",
    slug: "volleyball",
    description: "Official merchandise for the ADFA Volleyball club.",
    image: "/images/collections/clubs/volleyball.jpg",
    longDescription:
      "Volleyball club merchandise collection including training apparel and items representing the ADFA Patriots.",
  },
  {
    name: "Touch",
    slug: "touch",
    description: "Official merchandise for the ADFA Touch club.",
    image: "/images/collections/clubs/touch.jpg",
    longDescription:
      "Touch club merchandise collection including training apparel and items representing the ADFA Taipans.",
  },
  {
    name: "Water Polo",
    slug: "water-polo",
    description: "Official merchandise for the ADFA Water Polo club.",
    image: "/images/collections/clubs/water-polo.jpg",
    longDescription:
      "Water Polo merchandise collection including apparel and items for training, competition, and representation.",
  },
  {
    name: "Sailing",
    slug: "sailing",
    description: "Official merchandise for the ADFA Sailing club.",
    image: "/images/collections/clubs/sailing.jpg",
    longDescription:
      "Sailing club merchandise collection including apparel and items suited for maritime activities and training.",
  },
];

export function getClubBySlug(slug: string) {
  return clubs.find((club) => club.slug === slug);
}