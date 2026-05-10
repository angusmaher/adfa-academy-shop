import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="site-card group block overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1"
    >
      <div className="relative h-44 overflow-hidden rounded-xl bg-[var(--surface-2)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <p className="site-muted mt-4 text-sm capitalize">{product.groupType}</p>
      <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
      <p className="site-muted mt-1 text-sm">{product.description}</p>
      <p className="mt-3 font-medium">${product.price.toFixed(2)}</p>
    </Link>
  );
}