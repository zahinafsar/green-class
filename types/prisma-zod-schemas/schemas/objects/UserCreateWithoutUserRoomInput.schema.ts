import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { MessageCreateNestedManyWithoutUserInputObjectSchema } from './MessageCreateNestedManyWithoutUserInput.schema';
import { StudentCreateNestedOneWithoutUserInputObjectSchema } from './StudentCreateNestedOneWithoutUserInput.schema';
import { FacultyCreateNestedOneWithoutUserInputObjectSchema } from './FacultyCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutUserRoomInput> = z
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
    faculty: z
      .lazy(() => FacultyCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutUserRoomInputObjectSchema = Schema;
