"use client";
import "./ProductCard.css";
import Link from "next/link";
import type { Product } from "@/domain/product.schema";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="cardContainerProductCard p-4">
      <img src={product.image ?? ""} alt={product.title} className="h-32 w-full object-contain mb-3" />
      <h3 className="titleProductCard font-medium">{product.title}</h3>
      <p className="priceProductCard text-sm">R$ {product.price}</p>
      <div className="mt-3 flex gap-2">
        <Link href={`/products/${product.id}`} className="linkProductCard">detalhes</Link>
        <Link href={`/products/${product.id}/edit`} className="linkProductCard">editar</Link>
      </div>
    </div>
  );
}
