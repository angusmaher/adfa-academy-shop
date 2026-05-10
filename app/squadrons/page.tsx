import { squadrons } from "../../data/squadrons";
import Image from "next/image";

export default function SquadronsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Squadrons</h1>
      <p className="site-muted mt-3 max-w-2xl">
        Browse squadron-specific merchandise collections and apparel.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {squadrons.map((squadron) => (
          <a
            key={squadron.slug}
            href={`/squadrons/${squadron.slug}`}
            className={`site-card overflow-hidden rounded-2xl ${squadron.hoverClass}`}
          >
            <div className={`h-1.5 w-full ${squadron.accentClass}`} />
            <div className="p-6">
              <div className="relative h-36 overflow-hidden rounded-xl bg-[var(--surface-2)]">
                <Image
                  src={squadron.image}
                  alt={squadron.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{squadron.name}</h2>
              <p className="site-muted mt-2">{squadron.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}