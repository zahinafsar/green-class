import { z } from 'zod';
import { FacultyCreateWithoutUserInputObjectSchema } from './FacultyCreateWithoutUserInput.schema';
import { FacultyUncheckedCreateWithoutUserInputObjectSchema } from './FacultyUncheckedCreateWithoutUserInput.schema';
import { FacultyCreateOrConnectWithoutUserInputObjectSchema } from './FacultyCreateOrConnectWithoutUserInput.schema';
import { FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FacultyCreateWithoutUserInputObjectSchema),
        z.lazy(() => FacultyUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FacultyCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => FacultyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const FacultyCreateNestedOneWithoutUserInputObjectSchema = Schema;
