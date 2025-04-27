import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { MessageCreateNestedManyWithoutUserInputObjectSchema } from './MessageCreateNestedManyWithoutUserInput.schema';
import { FacultyCreateNestedOneWithoutUserInputObjectSchema } from './FacultyCreateNestedOneWithoutUserInput.schema';
import { UserRoomCreateNestedManyWithoutUserInputObjectSchema } from './UserRoomCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutStudentInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    faculty: z
      .lazy(() => FacultyCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutStudentInputObjectSchema = Schema;
