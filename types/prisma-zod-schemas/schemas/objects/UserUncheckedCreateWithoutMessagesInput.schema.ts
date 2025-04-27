import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { StudentUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './StudentUncheckedCreateNestedOneWithoutUserInput.schema';
import { FacultyUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './FacultyUncheckedCreateNestedOneWithoutUserInput.schema';
import { UserRoomUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserRoomUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutMessagesInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    student: z
      .lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    faculty: z
      .lazy(() => FacultyUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutMessagesInputObjectSchema = Schema;
