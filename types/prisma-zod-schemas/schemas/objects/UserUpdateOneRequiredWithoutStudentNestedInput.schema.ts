import { z } from 'zod';
import { UserCreateWithoutStudentInputObjectSchema } from './UserCreateWithoutStudentInput.schema';
import { UserUncheckedCreateWithoutStudentInputObjectSchema } from './UserUncheckedCreateWithoutStudentInput.schema';
import { UserCreateOrConnectWithoutStudentInputObjectSchema } from './UserCreateOrConnectWithoutStudentInput.schema';
import { UserUpsertWithoutStudentInputObjectSchema } from './UserUpsertWithoutStudentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutStudentInputObjectSchema } from './UserUpdateWithoutStudentInput.schema';
import { UserUncheckedUpdateWithoutStudentInputObjectSchema } from './UserUncheckedUpdateWithoutStudentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStudentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutStudentInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutStudentInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutStudentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutStudentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutStudentInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutStudentInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutStudentNestedInputObjectSchema =
  Schema;
