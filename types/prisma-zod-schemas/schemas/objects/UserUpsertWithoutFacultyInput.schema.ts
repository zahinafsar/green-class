import { z } from 'zod';
import { UserUpdateWithoutFacultyInputObjectSchema } from './UserUpdateWithoutFacultyInput.schema';
import { UserUncheckedUpdateWithoutFacultyInputObjectSchema } from './UserUncheckedUpdateWithoutFacultyInput.schema';
import { UserCreateWithoutFacultyInputObjectSchema } from './UserCreateWithoutFacultyInput.schema';
import { UserUncheckedCreateWithoutFacultyInputObjectSchema } from './UserUncheckedCreateWithoutFacultyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutFacultyInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFacultyInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFacultyInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFacultyInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFacultyInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutFacultyInputObjectSchema = Schema;
