export const squadrons = [
  {
    name: "Alpha Squadron",
    slug: "alpha",
    hoverClass: "squadron-alpha",
    accentClass: "accent-alpha",
    description: "View merchandise and apparel for Alpha Squadron.",
    longDescription:
      "Alpha Squadron merchandise collection including apparel, training gear, and squadron items.",
  },
  {
    name: "Bravo Squadron",
    slug: "bravo",
    hoverClass: "squadron-bravo",
    accentClass: "accent-bravo",
    description: "View merchandise and apparel for Bravo Squadron.",
    longDescription:
      "Bravo Squadron merchandise collection including apparel, training gear, and squadron items.",
  },
  {
    name: "Charlie Squadron",
    slug: "charlie",
    hoverClass: "squadron-charlie",
    accentClass: "accent-charlie",
    description: "View merchandise and apparel for Charlie Squadron.",
    longDescription:
      "Charlie Squadron merchandise collection including apparel, training gear, and squadron items.",
  },
  {
    name: "Delta Squadron",
    slug: "delta",
    hoverClass: "squadron-delta",
    accentClass: "accent-delta",
    description: "View merchandise and apparel for Delta Squadron.",
    longDescription:
      "Delta Squadron merchandise collection including apparel, training gear, and squadron items.",
  },
  {
    name: "Echo Squadron",
    slug: "echo",
    hoverClass: "squadron-echo",
    accentClass: "accent-echo",
    description: "View merchandise and apparel for Echo Squadron.",
    longDescription:
      "Echo Squadron merchandise collection including apparel, training gear, and squadron items.",
  },
  {
    name: "Foxtrot Squadron",
    slug: "foxtrot",
    hoverClass: "squadron-foxtrot",
    accentClass: "accent-foxtrot",
    description: "View merchandise and apparel for Foxtrot Squadron.",
    longDescription:
      "Foxtrot Squadron merchandise collection including apparel, training gear, and squadron items.",
  },
];

export function getSquadronBySlug(slug: string) {
  return squadrons.find((squadron) => squadron.slug === slug);
}