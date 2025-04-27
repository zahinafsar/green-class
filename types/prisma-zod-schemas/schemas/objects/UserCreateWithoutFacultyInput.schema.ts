import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { MessageCreateNestedManyWithoutUserInputObjectSchema } from './MessageCreateNestedManyWithoutUserInput.schema';
import { StudentCreateNestedOneWithoutUserInputObjectSchema } from './StudentCreateNestedOneWithoutUserInput.schema';
import { UserRoomCreateNestedManyWithoutUserInputObjectSchema } from './UserRoomCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutFacultyInput> = z
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
    student: z
      .lazy(() => StudentCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutFacultyInputObjectSchema = Schema;
