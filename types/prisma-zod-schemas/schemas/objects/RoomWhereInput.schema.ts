import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';
import { SectionRelationFilterObjectSchema } from './SectionRelationFilter.schema';
import { SectionWhereInputObjectSchema } from './SectionWhereInput.schema';
import { UserRoomListRelationFilterObjectSchema } from './UserRoomListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoomWhereInputObjectSchema),
        z.lazy(() => RoomWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoomWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoomWhereInputObjectSchema),
        z.lazy(() => RoomWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    section: z
      .union([
        z.lazy(() => SectionRelationFilterObjectSchema),
        z.lazy(() => SectionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userRoom: z.lazy(() => UserRoomListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const RoomWhereInputObjectSchema = Schema;
