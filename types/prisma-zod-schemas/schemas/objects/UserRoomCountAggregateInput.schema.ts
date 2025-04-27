import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    roomId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserRoomCountAggregateInputObjectSchema = Schema;
