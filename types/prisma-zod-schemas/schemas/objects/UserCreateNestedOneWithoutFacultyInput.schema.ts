import { z } from 'zod';
import { UserCreateWithoutFacultyInputObjectSchema } from './UserCreateWithoutFacultyInput.schema';
import { UserUncheckedCreateWithoutFacultyInputObjectSchema } from './UserUncheckedCreateWithoutFacultyInput.schema';
import { UserCreateOrConnectWithoutFacultyInputObjectSchema } from './UserCreateOrConnectWithoutFacultyInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFacultyInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutFacultyInputObjectSchema = Schema;
