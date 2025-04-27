import { z } from 'zod';
import { UserUpdateWithoutStudentInputObjectSchema } from './UserUpdateWithoutStudentInput.schema';
import { UserUncheckedUpdateWithoutStudentInputObjectSchema } from './UserUncheckedUpdateWithoutStudentInput.schema';
import { UserCreateWithoutStudentInputObjectSchema } from './UserCreateWithoutStudentInput.schema';
import { UserUncheckedCreateWithoutStudentInputObjectSchema } from './UserUncheckedCreateWithoutStudentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutStudentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutStudentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutStudentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutStudentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutStudentInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutStudentInputObjectSchema = Schema;
