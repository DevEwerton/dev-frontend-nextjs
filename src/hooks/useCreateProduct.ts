"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "@/repositories/products.repository";
import type { CreateProductInput } from "@/domain/product.schema";

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateProductInput) => createProduct(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products", "list"] }),
  });
}
