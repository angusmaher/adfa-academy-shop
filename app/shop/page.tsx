"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type FilterType = "all" | "club" | "squadron" | "vecc" | "general";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesFilter =
        activeFilter === "all" ? true : product.groupType === activeFilter;

      const matchesSearch =
        query.length === 0
          ? true
          : product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.groupSlug.toLowerCase().includes(query) ||
            product.groupType.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, activeFilter]);

  const filterButtonClass = (filter: FilterType) =>
    `rounded-full px-4 py-2 text-sm transition ${
      activeFilter === filter
        ? "bg-[var(--foreground)] text-[var(--background)]"
        : "site-pill"
    }`;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Shop</h1>
      <p className="site-muted mt-3 max-w-2xl">
        Browse all current ADFA Academy Shop products across clubs, squadrons,
        VECCs, and general academy merch.
      </p>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="site-input w-full rounded-xl px-4 py-3 outline-none lg:max-w-sm"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={filterButtonClass("all")}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("club")}
              className={filterButtonClass("club")}
            >
              Clubs
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("squadron")}
              className={filterButtonClass("squadron")}
            >
              Squadrons
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("vecc")}
              className={filterButtonClass("vecc")}
            >
              VECCs
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("general")}
              className={filterButtonClass("general")}
            >
              General
            </button>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="site-empty mt-10 rounded-2xl p-8">
          <p className="text-base font-medium">No products found.</p>
          <p className="mt-2 text-sm">
            Try a different search term or change the selected filter.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}