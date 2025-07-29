"use client";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/repositories/products.repository";

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["products", "detail", id],
    queryFn: () => getProduct(id),
    enabled: Number.isFinite(id),
  });
}
