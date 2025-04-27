import { z } from 'zod';
import { MessageCreateManyRoomInputObjectSchema } from './MessageCreateManyRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyRoomInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MessageCreateManyRoomInputObjectSchema),
      z.lazy(() => MessageCreateManyRoomInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MessageCreateManyRoomInputEnvelopeObjectSchema = Schema;
