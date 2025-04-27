import { z } from 'zod';
import { StudentCreateWithoutUserInputObjectSchema } from './StudentCreateWithoutUserInput.schema';
import { StudentUncheckedCreateWithoutUserInputObjectSchema } from './StudentUncheckedCreateWithoutUserInput.schema';
import { StudentCreateOrConnectWithoutUserInputObjectSchema } from './StudentCreateOrConnectWithoutUserInput.schema';
import { StudentUpsertWithoutUserInputObjectSchema } from './StudentUpsertWithoutUserInput.schema';
import { StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutUserInputObjectSchema } from './StudentUpdateWithoutUserInput.schema';
import { StudentUncheckedUpdateWithoutUserInputObjectSchema } from './StudentUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentUncheckedUpdateOneWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudentCreateWithoutUserInputObjectSchema),
          z.lazy(() => StudentUncheckedCreateWithoutUserInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudentCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StudentUpsertWithoutUserInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudentUpdateWithoutUserInputObjectSchema),
          z.lazy(() => StudentUncheckedUpdateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StudentUncheckedUpdateOneWithoutUserNestedInputObjectSchema =
  Schema;
