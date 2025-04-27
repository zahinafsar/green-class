import { z } from 'zod';
import { StudentCreateWithoutUserInputObjectSchema } from './StudentCreateWithoutUserInput.schema';
import { StudentUncheckedCreateWithoutUserInputObjectSchema } from './StudentUncheckedCreateWithoutUserInput.schema';
import { StudentCreateOrConnectWithoutUserInputObjectSchema } from './StudentCreateOrConnectWithoutUserInput.schema';
import { StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentCreateNestedOneWithoutUserInput> = z
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
    connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StudentCreateNestedOneWithoutUserInputObjectSchema = Schema;
