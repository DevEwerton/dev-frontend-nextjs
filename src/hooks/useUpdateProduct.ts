"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "@/repositories/products.repository";
import type { UpdateProductInput } from "@/domain/product.schema";

export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: UpdateProductInput) => updateProduct(input),
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["products", "list"] });
      qc.invalidateQueries({ queryKey: ["products", "detail", vars.id] });
    },
  });
}
