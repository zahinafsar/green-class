import { z } from 'zod';
import { UserRoomCreateManyRoomInputObjectSchema } from './UserRoomCreateManyRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateManyRoomInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserRoomCreateManyRoomInputObjectSchema),
      z.lazy(() => UserRoomCreateManyRoomInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserRoomCreateManyRoomInputEnvelopeObjectSchema = Schema;
