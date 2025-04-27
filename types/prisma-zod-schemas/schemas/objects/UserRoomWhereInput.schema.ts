import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { RoomRelationFilterObjectSchema } from './RoomRelationFilter.schema';
import { RoomWhereInputObjectSchema } from './RoomWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserRoomWhereInputObjectSchema),
        z.lazy(() => UserRoomWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserRoomWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserRoomWhereInputObjectSchema),
        z.lazy(() => UserRoomWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roomId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    room: z
      .union([
        z.lazy(() => RoomRelationFilterObjectSchema),
        z.lazy(() => RoomWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserRoomWhereInputObjectSchema = Schema;
