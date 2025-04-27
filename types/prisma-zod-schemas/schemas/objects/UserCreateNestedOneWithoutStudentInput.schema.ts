import { z } from 'zod';
import { UserCreateWithoutStudentInputObjectSchema } from './UserCreateWithoutStudentInput.schema';
import { UserUncheckedCreateWithoutStudentInputObjectSchema } from './UserUncheckedCreateWithoutStudentInput.schema';
import { UserCreateOrConnectWithoutStudentInputObjectSchema } from './UserCreateOrConnectWithoutStudentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutStudentInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutStudentInputObjectSchema = Schema;
