"use client";
import { useProduct } from "@/hooks/useProduct";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data, isLoading, isError } = useProduct(id);

  if (isLoading) { return <p>Aguarde, estamos trazendo as informações...</p>; }
  if (isError || !data) { return <p>Opsssss, não conseguimos encontrar. Tente novamente mais tarde</p>; }

  return (
    <div className="p-6 space-y-3 bg-white rounded-[12px] shadow-md max-w-2xl mx-auto mt-8 flex flex-col items-center">
      <img src={data.image ?? ""} alt={data.title} className="h-40 object-contain" />
      <h1 className="text-xl font-semibold">{data.title}</h1>
      <p>R$ {data.price}</p>
      <p className="text-gray-600">{data.category}</p>
      <p>{data.description}</p>
      <Link
        href="/products"
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-medium
          py-2
          px-4
          rounded-lg
          disabled:opacity-50
          cursor-pointer
          transition-colors
          duration-200
        "
      >
        voltar
      </Link>
    </div>
  );
}