import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { MessageUpdateManyWithoutUserNestedInputObjectSchema } from './MessageUpdateManyWithoutUserNestedInput.schema';
import { StudentUpdateOneWithoutUserNestedInputObjectSchema } from './StudentUpdateOneWithoutUserNestedInput.schema';
import { FacultyUpdateOneWithoutUserNestedInputObjectSchema } from './FacultyUpdateOneWithoutUserNestedInput.schema';
import { UserRoomUpdateManyWithoutUserNestedInputObjectSchema } from './UserRoomUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleSchema),
        z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    student: z
      .lazy(() => StudentUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    faculty: z
      .lazy(() => FacultyUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
