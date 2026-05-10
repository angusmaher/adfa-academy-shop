import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--surface-2)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <p className="site-muted text-sm uppercase tracking-[0.2em]">
              {product.groupType}
            </p>

            <h1 className="text-4xl font-bold">{product.name}</h1>

            <p className="text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="site-muted leading-7">
            {product.description}
          </p>

          <div className="flex gap-4">
            <Link
              href="/shop"
              className="site-button-secondary rounded-xl px-5 py-3 text-sm font-medium"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}