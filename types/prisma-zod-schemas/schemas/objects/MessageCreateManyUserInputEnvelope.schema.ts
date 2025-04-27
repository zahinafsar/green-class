import { z } from 'zod';
import { MessageCreateManyUserInputObjectSchema } from './MessageCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MessageCreateManyUserInputObjectSchema),
      z.lazy(() => MessageCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MessageCreateManyUserInputEnvelopeObjectSchema = Schema;
