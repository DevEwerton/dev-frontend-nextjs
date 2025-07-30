"use client";
import { useParams, useRouter } from "next/navigation";
import ProductForm, { type ProductFormData } from "@/components/products/ProductForm";
import { useProduct } from "@/hooks/useProduct";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";

export default function EditProductPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data } = useProduct(id);
  const { mutateAsync: updateAsync } = useUpdateProduct();
  const { mutateAsync: deleteAsync } = useDeleteProduct();
  const router = useRouter();

  if (!data) return <p className="p-6">loading…</p>;

  const onSubmit = async (form: ProductFormData) => {
    await updateAsync({ id, ...form, image: form.image || undefined });
    router.push(`/products/${id}`);
  };

  const onDelete = async () => {
    await deleteAsync(id);
    router.push("/products");
  };

  return (
    <div className="p-6 max-w-xl space-y-4">
      <h1 className="text-lg font-semibold">Alterando o produto...</h1>
      <ProductForm
        submitText="salvar"
        onSubmit={onSubmit}
        defaultValues={{
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image ?? "",
        }}
      />
      <button onClick={onDelete} className="px-4 py-2 rounded bg-red-600 text-white">excluir</button>
    </div>
  );
}
