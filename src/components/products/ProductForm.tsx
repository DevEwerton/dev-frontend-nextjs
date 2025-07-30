"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Resolver } from "react-hook-form";

const FormSchema = z.object({
  title: z.string().min(1),
  price: z.coerce.number().nonnegative(),
  description: z.string().min(1),
  category: z.string().min(1),
  image: z.string().min(1),
});
export type ProductFormData = z.infer<typeof FormSchema>;

export default function ProductForm({
  defaultValues,
  onSubmit,
  submitText,
}: {
  defaultValues?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void | Promise<void>;
  submitText: string;
}) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<ProductFormData>({
      resolver: zodResolver(FormSchema) as Resolver<ProductFormData>,
      defaultValues,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input {...register("title")} placeholder="título" className="w-full border p-2 rounded" />
      {errors.title && <p className="text-red-600 text-sm">Título é obrigatório</p>}

      <input
        type="number"
        step="any"
        inputMode="decimal"
        {...register("price", { valueAsNumber: true })}
        placeholder="preço"
        className="w-full border p-2 rounded"
      />
      {errors.price && <p className="text-red-600 text-sm">Preço é obrigatório</p>}

      <textarea {...register("description")} placeholder="descrição" className="w-full border p-2 rounded" />
      {errors.description && <p className="text-red-600 text-sm">Descrição é obrigatória</p>}

      <input {...register("category")} placeholder="categoria" className="w-full border p-2 rounded" />
      {errors.category && <p className="text-red-600 text-sm">Categoria é obrigatória</p>}

      <input {...register("image")} placeholder="url da imagem" className="w-full border p-2 rounded" />
      {errors.image && <p className="text-red-600 text-sm">URL da imagem é obrigatória</p>}

      <div className="flex items-center gap-3">
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

        <button
          disabled={isSubmitting}
          className="
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
          "
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}
