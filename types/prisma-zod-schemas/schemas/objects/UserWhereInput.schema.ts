import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';
import { StudentRelationFilterObjectSchema } from './StudentRelationFilter.schema';
import { StudentWhereInputObjectSchema } from './StudentWhereInput.schema';
import { FacultyRelationFilterObjectSchema } from './FacultyRelationFilter.schema';
import { FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema';
import { UserRoomListRelationFilterObjectSchema } from './UserRoomListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => EnumRoleFilterObjectSchema),
        z.lazy(() => RoleSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    student: z
      .union([
        z.lazy(() => StudentRelationFilterObjectSchema),
        z.lazy(() => StudentWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    faculty: z
      .union([
        z.lazy(() => FacultyRelationFilterObjectSchema),
        z.lazy(() => FacultyWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userRoom: z.lazy(() => UserRoomListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
