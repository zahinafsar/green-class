import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    roomId: z.string(),
  })
  .strict();

export const MessageUncheckedCreateInputObjectSchema = Schema;
