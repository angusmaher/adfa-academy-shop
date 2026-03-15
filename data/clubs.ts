export const clubs = [
  {
    name: "Basketball",
    slug: "basketball",
    description: "View merchandise and apparel for the Basketball club.",
    longDescription:
      "Basketball club merchandise collection including training gear, apparel, and supporter items.",
  },
  {
    name: "AFL",
    slug: "afl",
    description: "View merchandise and apparel for the AFL club.",
    longDescription:
      "AFL club merchandise collection including training gear, apparel, and supporter items.",
  },
  {
    name: "Rugby",
    slug: "rugby",
    description: "View merchandise and apparel for the Rugby club.",
    longDescription:
      "Rugby club merchandise collection including training gear, apparel, and supporter items.",
  },
  {
    name: "Rowing",
    slug: "rowing",
    description: "View merchandise and apparel for the Rowing club.",
    longDescription:
      "Rowing club merchandise collection including training gear, apparel, and supporter items.",
  },
  {
    name: "Netball",
    slug: "netball",
    description: "View merchandise and apparel for the Netball club.",
    longDescription:
      "Netball club merchandise collection including training gear, apparel, and supporter items.",
  },
  {
    name: "Soccer",
    slug: "soccer",
    description: "View merchandise and apparel for the Soccer club.",
    longDescription:
      "Soccer club merchandise collection including training gear, apparel, and supporter items.",
  },
];

export function getClubBySlug(slug: string) {
  return clubs.find((club) => club.slug === slug);
}