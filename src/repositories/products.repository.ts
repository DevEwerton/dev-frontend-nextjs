import { http } from "@/lib/http";
import { z } from "zod";
import {
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema,
  type Product,
  type CreateProductInput,
  type UpdateProductInput,
} from "@/domain/product.schema";

const Arr = z.array(ProductSchema);

export const listProducts = async (): Promise<Product[]> => {
  return Arr.parse(await http("/products"));
};

export const getProduct = async (id: number): Promise<Product> => {
  return ProductSchema.parse(await http(`/products/${id}`));
};

export const createProduct = async (input: CreateProductInput): Promise<Product> => {
  return ProductSchema.parse(
    await http("/products", { method: "POST", body: CreateProductSchema.parse(input) })
  );
};

export const updateProduct = async (input: UpdateProductInput): Promise<Product> => {
  const { id, ...body } = UpdateProductSchema.parse(input);
  return ProductSchema.parse(await http(`/products/${id}`, { method: "PUT", body }));
};

export const deleteProduct = async (id: number) => {
  await http(`/products/${id}`, { method: "DELETE" });
  return { id };
};
