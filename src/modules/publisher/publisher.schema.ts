import { z } from "zod";

export const createPublisherSchema = z.object({
  name: z.string(),
});

export const updatePublisherSchema = z.object({
  name: z.string().optional(),
});

export type CreatePublisherDTO = z.infer<typeof createPublisherSchema>;
export type UpdatePublisherDTO = z.infer<typeof updatePublisherSchema>;
