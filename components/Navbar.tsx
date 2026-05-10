"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/clubs", label: "Clubs" },
    { href: "/squadrons", label: "Squadrons" },
    { href: "/veccs", label: "VECCs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--surface)]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight sm:text-xl cursor-pointer"
          >
            ADFA Academy Shop
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer rounded-xl border border-[var(--border)] p-2 md:hidden hover:bg-[var(--surface-2)] transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="pb-4 md:hidden">
            <div className="site-card rounded-2xl p-3">
              <nav className="flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}