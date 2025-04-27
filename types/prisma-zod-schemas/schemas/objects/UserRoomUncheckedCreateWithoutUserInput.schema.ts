import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    roomId: z.string(),
  })
  .strict();

export const UserRoomUncheckedCreateWithoutUserInputObjectSchema = Schema;
