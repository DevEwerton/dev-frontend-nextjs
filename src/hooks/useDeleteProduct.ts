"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/repositories/products.repository";

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products", "list"] }),
  });
}
