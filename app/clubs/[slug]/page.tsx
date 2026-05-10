import Image from "next/image";
import { getClubBySlug } from "../../../data/clubs";
import { getProductsByGroup } from "../../../data/products";
import ProductCard from "@/components/ProductCard";

export default async function ClubDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  const ClubProducts = getProductsByGroup(slug);

  if (!club) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Club not found</h1>
        <p className="site-muted mt-4">
          We could not find that Club collection.
        </p>
        <a
          href="/clubs"
          className="site-button-secondary mt-6 inline-block rounded-xl px-5 py-3"
        >
          Back to Clubs
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <a href="/clubs" className="site-muted text-sm hover:underline">
        ← Back to Clubs
      </a>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="h-2 w-full bg-[var(--foreground)]" />
        <div className="grid gap-8 px-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="site-muted text-sm uppercase tracking-[0.2em]">
              Club Collection
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              {club.name}
            </h1>
            <p className="site-muted mt-5 max-w-2xl text-lg">
              {club.longDescription}
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
              src={club.image}
              alt={club.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold">Featured {club.name} Products</h2>
        <p className="site-muted mt-2">
          Products are now being pulled from the shared products file.
        </p>
      </div>

      {ClubProducts.length === 0 ? (
        <div className="site-empty mt-8 rounded-2xl p-8">
          <p className="text-base font-medium">No products added yet.</p>
          <p className="mt-2 text-sm">
            This collection is set up and ready — products can be added here later.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ClubProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}