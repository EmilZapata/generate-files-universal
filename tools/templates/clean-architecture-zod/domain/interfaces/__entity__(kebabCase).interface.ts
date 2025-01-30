import { z } from 'zod';

export const __entity__(pascalCase)Schema = z.object({
  id: z.number(),
  createdBy: z.number(),
  status: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.instanceof(Date),
  deletedAt: z.date(),
});

export type __entity__(pascalCase)Type = z.infer<typeof __entity__(pascalCase)Schema>;
