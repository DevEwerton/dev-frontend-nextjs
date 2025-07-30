"use client";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) { return <p className="p-6 text-white">Aguarde, estamos carregando as informações...</p>; }
  if (isError) { return <p className="p-6 text-white">Opsssss, tivemos algum problema. Tente novamente mais tarde.</p>; }

  return (
    <div className="p-6">
      <div className="mb-4">
        <Link 
          href="/products/new"
          className={`
            bg-green-600
            hover:bg-green-700
            text-white
            font-medium
            py-2
            px-4
            rounded-lg
            disabled:opacity-50
            cursor-pointer
            transition-colors
            duration-200
            ml-auto
          `}
        >
          + novo produto
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data!.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="https://ewertondias.com"
          target="_blank"
          className="text-gray-500 hover:text-gray-700 transition-colors" 
        >
          ewertondias.com
        </Link>
      </div>
    </div>
  );
}
