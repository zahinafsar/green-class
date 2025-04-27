import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    roomId: z.string(),
  })
  .strict();

export const UserRoomUncheckedCreateInputObjectSchema = Schema;
