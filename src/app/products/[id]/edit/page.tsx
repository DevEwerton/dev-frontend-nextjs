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

  if (!data) { return <p className="p-6 text-white">Aguarde, estamos trazendo as informações...</p>; }

  const onSubmit = async (form: ProductFormData) => {
    await updateAsync({ id, ...form, image: form.image || undefined });
    router.push(`/products/${id}`);
  };

  const onDelete = async () => {
    await deleteAsync(id);
    router.push("/products");
  };

  return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xl flex flex-col bg-white p-6 rounded-[12px] shadow-md">
          <h1 className="text-lg font-semibold mb-6 text-center">Alterar Produto</h1>
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
          <button
            onClick={onDelete}
            className="
              bg-red-600
              hover:bg-red-700
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
              mt-4
            "
          >
            excluir
          </button>
        </div>
      </div>
  );
}
