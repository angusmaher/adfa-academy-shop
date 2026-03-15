import { clubs } from "../../data/clubs";

export default function ClubsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Clubs</h1>
      <p className="site-muted mt-3 max-w-2xl">
        Browse club-specific merchandise collections and apparel.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map((club) => (
          <a
            key={club.slug}
            href={`/clubs/${club.slug}`}
            className="site-card overflow-hidden rounded-2xl"
          >
            <div className="h-1.5 w-full bg-[var(--foreground)]" />
            <div className="p-6">
              <div className="h-36 rounded-xl bg-[var(--surface-2)]" />
              <h2 className="mt-4 text-xl font-semibold">{club.name}</h2>
              <p className="site-muted mt-2">{club.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}