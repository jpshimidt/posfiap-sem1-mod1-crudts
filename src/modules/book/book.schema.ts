import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string(),
  author: z.string(),
  isbn: z.string(),
  publicationDate: z.string(),
  publisherId: z.number(),
});

export const updateBookSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  isbn: z.string().optional(),
  publicationDate: z.string().optional(),
  publisherId: z.number().optional(),
});

export type CreateBookDTO = z.infer<typeof createBookSchema>;
export type UpdateBookDTO = z.infer<typeof updateBookSchema>;
