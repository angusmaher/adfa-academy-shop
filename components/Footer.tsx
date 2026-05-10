export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold">ADFA Academy Shop</p>
            <p className="site-muted mt-2 max-w-md text-sm">
              Merchandise for squadrons, clubs, VECCs, and academy groups.
            </p>
          </div>

          <p className="site-muted text-sm">© 2026 ADFA Academy Shop</p>
        </div>
      </div>
    </footer>
  );
}