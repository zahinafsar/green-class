import { z } from 'zod';
import { FacultyUpdateWithoutUserInputObjectSchema } from './FacultyUpdateWithoutUserInput.schema';
import { FacultyUncheckedUpdateWithoutUserInputObjectSchema } from './FacultyUncheckedUpdateWithoutUserInput.schema';
import { FacultyCreateWithoutUserInputObjectSchema } from './FacultyCreateWithoutUserInput.schema';
import { FacultyUncheckedCreateWithoutUserInputObjectSchema } from './FacultyUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => FacultyUpdateWithoutUserInputObjectSchema),
      z.lazy(() => FacultyUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FacultyCreateWithoutUserInputObjectSchema),
      z.lazy(() => FacultyUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const FacultyUpsertWithoutUserInputObjectSchema = Schema;
