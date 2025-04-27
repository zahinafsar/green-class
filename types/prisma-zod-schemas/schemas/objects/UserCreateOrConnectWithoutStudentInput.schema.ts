import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutStudentInputObjectSchema } from './UserCreateWithoutStudentInput.schema';
import { UserUncheckedCreateWithoutStudentInputObjectSchema } from './UserUncheckedCreateWithoutStudentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutStudentInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutStudentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutStudentInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutStudentInputObjectSchema = Schema;
