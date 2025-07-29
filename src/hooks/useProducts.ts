"use client";
import { useQuery } from "@tanstack/react-query";
import { listProducts } from "@/repositories/products.repository";

export function useProducts() {
  return useQuery({ queryKey: ["products", "list"], queryFn: listProducts });
}
