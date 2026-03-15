import { getVeccBySlug } from "../../../data/veccs";
import { getProductsByGroup } from "../../../data/products";

export default async function VeccDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vecc = getVeccBySlug(slug);
  const veccProducts = getProductsByGroup(slug);

  if (!vecc) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">VECC not found</h1>
        <p className="site-muted mt-4">
          We could not find that VECC collection.
        </p>
        <a
          href="/veccs"
          className="site-button-secondary mt-6 inline-block rounded-xl px-5 py-3"
        >
          Back to VECCs
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <a href="/veccs" className="site-muted text-sm hover:underline">
        ← Back to VECCs
      </a>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="h-2 w-full bg-[var(--foreground)]" />
        <div className="grid gap-8 px-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="site-muted text-sm uppercase tracking-[0.2em]">
              VECC Collection
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              {vecc.name}
            </h1>
            <p className="site-muted mt-5 max-w-2xl text-lg">
              {vecc.longDescription}
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

          <div className="rounded-2xl bg-[var(--surface-2)]" />
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold">Featured {vecc.name} Products</h2>
        <p className="site-muted mt-2">
          Products are now being pulled from the shared products file.
        </p>
      </div>

    {veccProducts.length === 0 ? (
        <div className="site-empty mt-8 rounded-2xl p-8">
          <p className="text-base font-medium">No products added yet.</p>
          <p className="mt-2 text-sm">
            This collection is set up and ready — products can be added here later.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {veccProducts.map((product) => (
            <div key={product.id} className="site-card overflow-hidden rounded-2xl">
              <div className="h-1.5 w-full bg-[var(--foreground)]" />
              <div className="p-5">
                <div className="h-44 rounded-xl bg-[var(--surface-2)]" />
                <p className="site-muted mt-4 text-sm">{vecc.name}</p>
                <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
                <p className="site-muted mt-1 text-sm">{product.type}</p>
                <p className="mt-3 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}