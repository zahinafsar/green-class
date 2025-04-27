import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    roomId: z.string(),
  })
  .strict();

export const MessageUncheckedCreateWithoutUserInputObjectSchema = Schema;
