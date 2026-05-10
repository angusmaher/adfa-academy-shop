import { getSquadronBySlug } from "../../../data/squadrons";
import { getProductsByGroup } from "../../../data/products";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default async function SquadronDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const squadron = getSquadronBySlug(slug);
  const squadronProducts = getProductsByGroup(slug);

  if (!squadron) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Squadron not found</h1>
        <p className="site-muted mt-4">
          We could not find that squadron collection.
        </p>
        <a
          href="/squadrons"
          className="site-button-secondary mt-6 inline-block rounded-xl px-5 py-3"
        >
          Back to Squadrons
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <a href="/squadrons" className="site-muted text-sm hover:underline">
        ← Back to Squadrons
      </a>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
        <div className={`h-2 w-full ${squadron.accentClass}`} />
        <div className="grid gap-8 px-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="site-muted text-sm uppercase tracking-[0.2em]">
              Squadron Collection
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              {squadron.name}
            </h1>
            <p className="site-muted mt-5 max-w-2xl text-lg">
              {squadron.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/shop"
                className="site-button-primary rounded-xl px-6 py-3"
              >
                Browse All Products
              </a>
              <a
                href="/contact"
                className="site-button-secondary rounded-xl px-6 py-3"
              >
                Request Merchandise
              </a>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-[var(--surface-2)]">
            <Image
              src={squadron.image}
              alt={squadron.name}
              fill
              className="object-contain"
            />
          </div>
      </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold">
          Featured {squadron.name} Products
        </h2>
        <p className="site-muted mt-2">
          Products are now being pulled from the shared products file.
        </p>
      </div>

    {squadronProducts.length === 0 ? (
        <div className="site-empty mt-8 rounded-2xl p-8">
          <p className="text-base font-medium">No products added yet.</p>
          <p className="mt-2 text-sm">
            This collection is set up and ready — products can be added here later.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {squadronProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}