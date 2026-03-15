import { products } from "../../data/products";

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Shop</h1>
      <p className="site-muted mt-3 max-w-2xl">
        Browse all current ADFA Academy Shop products across clubs, squadrons, VECCs, and general academy merch.
      </p>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="site-input w-full rounded-xl px-4 py-3 outline-none lg:max-w-sm"
          />

          <div className="flex flex-wrap gap-3">
            <button className="site-pill rounded-full px-4 py-2 text-sm">All</button>
            <button className="site-pill rounded-full px-4 py-2 text-sm">Clubs</button>
            <button className="site-pill rounded-full px-4 py-2 text-sm">Squadrons</button>
            <button className="site-pill rounded-full px-4 py-2 text-sm">VECCs</button>
            <button className="site-pill rounded-full px-4 py-2 text-sm">General</button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="site-card rounded-2xl p-5">
            <div className="h-44 rounded-xl bg-[var(--surface-2)]" />
            <p className="site-muted mt-4 text-sm">{product.group}</p>
            <h2 className="mt-1 text-lg font-semibold">{product.name}</h2>
            <p className="site-muted mt-1 text-sm">{product.type}</p>
            <p className="mt-3 font-medium">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}