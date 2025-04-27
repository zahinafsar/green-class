import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SessionUncheckedCreateWithoutUserInputObjectSchema = Schema;
