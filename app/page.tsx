import { products } from "../data/products";

const featuredSections = [
  {
    title: "Clubs",
    description:
      "Browse sports club merchandise including basketball, AFL, rugby, rowing, and more.",
    href: "/clubs",
  },
  {
    title: "Squadrons",
    description:
      "Explore squadron-specific apparel and collection pages with subtle squadron accents.",
    href: "/squadrons",
  },
  {
    title: "VECCs",
    description:
      "Find specialty merchandise for academy activities, military skills, and events.",
    href: "/veccs",
  },
];

const featuredProducts = products.slice(0, 4);

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <p className="site-muted text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm">
            Official Merch Storefront
          </p>

          <h1 className="site-hero-title mt-4 max-w-4xl font-bold">
            ADFA Academy Shop
          </h1>

          <p className="site-muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
            Browse squadron, club, VECC, and academy merchandise through a clean,
            central storefront built for cadets and academy groups.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/shop"
              className="site-button-primary rounded-xl px-6 py-3 text-center"
            >
              Browse Shop
            </a>
            <a
              href="/squadrons"
              className="site-button-secondary rounded-xl px-6 py-3 text-center"
            >
              View Squadrons
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="site-section-title font-bold">Browse by Collection</h2>
          <p className="site-muted mt-3 max-w-2xl text-sm leading-6 sm:text-base">
            Navigate the shop by academy group, from sports clubs to squadrons and VECC collections.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredSections.map((section) => (
            <a
              key={section.title}
              href={section.href}
              className="site-card rounded-2xl p-6 sm:p-7"
            >
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              <p className="site-muted mt-3 text-sm leading-6 sm:text-base">
                {section.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-6 sm:pb-10">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="site-section-title font-bold">Featured Products</h2>
            <p className="site-muted mt-3 max-w-2xl text-sm leading-6 sm:text-base">
              A small preview of the current academy merchandise range.
            </p>
          </div>

          <a href="/shop" className="text-sm font-medium hover:underline">
            View all products
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="site-card rounded-2xl p-5">
              <div className="h-44 rounded-xl bg-[var(--surface-2)]" />
              <p className="site-muted mt-4 text-sm">{product.group}</p>
              <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
              <p className="site-muted mt-1 text-sm">{product.type}</p>
              <p className="mt-3 font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}