import { z } from 'zod';
import { UserRoomWhereInputObjectSchema } from './UserRoomWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomListRelationFilter> = z
  .object({
    every: z.lazy(() => UserRoomWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserRoomWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserRoomWhereInputObjectSchema).optional(),
  })
  .strict();

export const UserRoomListRelationFilterObjectSchema = Schema;
