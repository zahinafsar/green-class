import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StudentUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './StudentUncheckedUpdateOneWithoutUserNestedInput.schema';
import { FacultyUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './FacultyUncheckedUpdateOneWithoutUserNestedInput.schema';
import { UserRoomUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserRoomUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
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
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    student: z
      .lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    faculty: z
      .lazy(() => FacultyUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputObjectSchema = Schema;
