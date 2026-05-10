import Image from "next/image";
import { veccs } from "../../data/veccs";

export default function VeccsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">VECCs</h1>
      <p className="site-muted mt-3 max-w-2xl">
        Explore specialty merchandise linked to events, military skills, and academy activities.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {veccs.map((vecc) => (
          <a
            key={vecc.slug}
            href={`/veccs/${vecc.slug}`}
            className="site-card overflow-hidden rounded-2xl"
          >
            <div className="h-1.5 w-full bg-[var(--foreground)]" />
            <div className="p-6">
              <div className="relative h-36 overflow-hidden rounded-xl bg-[var(--surface-2)]">
                <Image
                  src={vecc.image}
                  alt={vecc.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="mt-4 text-xl font-semibold">{vecc.name}</h2>
              <p className="site-muted mt-2">{vecc.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}