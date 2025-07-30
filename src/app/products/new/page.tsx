"use client";
import { useRouter } from "next/navigation";
import ProductForm, { type ProductFormData } from "@/components/products/ProductForm";
import { useCreateProduct } from "@/hooks/useCreateProduct";

export default function NewProductPage() {
  const { mutateAsync } = useCreateProduct();
  const router = useRouter();

  const onSubmit = async (data: ProductFormData) => {
    await mutateAsync({
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image || undefined,
    });
    router.push("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl flex flex-col bg-white p-6 rounded-[12px] shadow-md">
        <h1 className="text-lg font-semibold mb-6 text-center">Novo Produto</h1>
        <ProductForm submitText="+ criar" onSubmit={onSubmit} />
      </div>
    </div>
  );
}
