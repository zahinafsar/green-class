import { z } from 'zod';
import { UserCreateWithoutFacultyInputObjectSchema } from './UserCreateWithoutFacultyInput.schema';
import { UserUncheckedCreateWithoutFacultyInputObjectSchema } from './UserUncheckedCreateWithoutFacultyInput.schema';
import { UserCreateOrConnectWithoutFacultyInputObjectSchema } from './UserCreateOrConnectWithoutFacultyInput.schema';
import { UserUpsertWithoutFacultyInputObjectSchema } from './UserUpsertWithoutFacultyInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFacultyInputObjectSchema } from './UserUpdateWithoutFacultyInput.schema';
import { UserUncheckedUpdateWithoutFacultyInputObjectSchema } from './UserUncheckedUpdateWithoutFacultyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFacultyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFacultyInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutFacultyInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFacultyInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutFacultyInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutFacultyInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutFacultyInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFacultyNestedInputObjectSchema =
  Schema;
