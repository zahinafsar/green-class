import { z } from 'zod';
import { UserRoomCreateManyUserInputObjectSchema } from './UserRoomCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserRoomCreateManyUserInputObjectSchema),
      z.lazy(() => UserRoomCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserRoomCreateManyUserInputEnvelopeObjectSchema = Schema;
