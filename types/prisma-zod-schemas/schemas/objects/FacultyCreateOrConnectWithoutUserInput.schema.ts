import { z } from 'zod';
import { FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyCreateWithoutUserInputObjectSchema } from './FacultyCreateWithoutUserInput.schema';
import { FacultyUncheckedCreateWithoutUserInputObjectSchema } from './FacultyUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => FacultyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FacultyCreateWithoutUserInputObjectSchema),
      z.lazy(() => FacultyUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const FacultyCreateOrConnectWithoutUserInputObjectSchema = Schema;
