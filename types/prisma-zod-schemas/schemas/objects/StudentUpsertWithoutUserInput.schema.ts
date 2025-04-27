import { z } from 'zod';
import { StudentUpdateWithoutUserInputObjectSchema } from './StudentUpdateWithoutUserInput.schema';
import { StudentUncheckedUpdateWithoutUserInputObjectSchema } from './StudentUncheckedUpdateWithoutUserInput.schema';
import { StudentCreateWithoutUserInputObjectSchema } from './StudentCreateWithoutUserInput.schema';
import { StudentUncheckedCreateWithoutUserInputObjectSchema } from './StudentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudentUpdateWithoutUserInputObjectSchema),
      z.lazy(() => StudentUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudentCreateWithoutUserInputObjectSchema),
      z.lazy(() => StudentUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const StudentUpsertWithoutUserInputObjectSchema = Schema;
