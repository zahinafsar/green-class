import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SessionCreateManyUserInputObjectSchema = Schema;
