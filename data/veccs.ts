export const veccs = [
  {
    name: "Military Skills",
    slug: "military-skills",
    description: "View merchandise and apparel for Military Skills.",
    longDescription:
      "Military Skills merchandise collection including training apparel, activity gear, and event items.",
  },
  {
    name: "Adventure Training",
    slug: "adventure-training",
    description: "View merchandise and apparel for Adventure Training.",
    longDescription:
      "Adventure Training merchandise collection including activity apparel, gear, and supporter items.",
  },
  {
    name: "Special Events",
    slug: "special-events",
    description: "View merchandise and apparel for Special Events.",
    longDescription:
      "Special Events merchandise collection including commemorative apparel and event items.",
  },
  {
    name: "Academy Competitions",
    slug: "academy-competitions",
    description: "View merchandise and apparel for Academy Competitions.",
    longDescription:
      "Academy Competitions merchandise collection including competition apparel and supporter items.",
  },
  {
    name: "Ceremonial",
    slug: "ceremonial",
    description: "View merchandise and apparel for Ceremonial activities.",
    longDescription:
      "Ceremonial merchandise collection including formal event apparel and commemorative items.",
  },
  {
    name: "Leadership Programs",
    slug: "leadership-programs",
    description: "View merchandise and apparel for Leadership Programs.",
    longDescription:
      "Leadership Programs merchandise collection including apparel, event items, and supporter gear.",
  },
];

export function getVeccBySlug(slug: string) {
  return veccs.find((vecc) => vecc.slug === slug);
}