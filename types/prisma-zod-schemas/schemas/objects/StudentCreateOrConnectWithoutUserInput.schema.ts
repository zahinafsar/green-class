import { z } from 'zod';
import { StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutUserInputObjectSchema } from './StudentCreateWithoutUserInput.schema';
import { StudentUncheckedCreateWithoutUserInputObjectSchema } from './StudentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StudentCreateWithoutUserInputObjectSchema),
      z.lazy(() => StudentUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const StudentCreateOrConnectWithoutUserInputObjectSchema = Schema;
