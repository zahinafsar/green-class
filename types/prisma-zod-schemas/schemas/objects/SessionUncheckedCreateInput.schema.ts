import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SessionUncheckedCreateInputObjectSchema = Schema;
