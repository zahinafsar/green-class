import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RoomRelationFilterObjectSchema } from './RoomRelationFilter.schema';
import { RoomWhereInputObjectSchema } from './RoomWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SectionWhereInputObjectSchema),
        z.lazy(() => SectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SectionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SectionWhereInputObjectSchema),
        z.lazy(() => SectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    batch: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subject: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    section: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    courseCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    roomId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    room: z
      .union([
        z.lazy(() => RoomRelationFilterObjectSchema),
        z.lazy(() => RoomWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SectionWhereInputObjectSchema = Schema;
