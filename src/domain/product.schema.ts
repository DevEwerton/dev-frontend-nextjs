import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url().optional(),
});
export type Product = z.infer<typeof ProductSchema>;

export const CreateProductSchema = ProductSchema.omit({ id: true });
export type CreateProductInput = z.infer<typeof CreateProductSchema>;

export const UpdateProductSchema = ProductSchema.partial().extend({ id: z.number() });
export type UpdateProductInput = z.infer<typeof UpdateProductSchema>;
