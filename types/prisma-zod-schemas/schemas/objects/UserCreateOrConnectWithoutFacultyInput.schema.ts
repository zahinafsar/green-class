import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFacultyInputObjectSchema } from './UserCreateWithoutFacultyInput.schema';
import { UserUncheckedCreateWithoutFacultyInputObjectSchema } from './UserUncheckedCreateWithoutFacultyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFacultyInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutFacultyInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFacultyInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutFacultyInputObjectSchema = Schema;
