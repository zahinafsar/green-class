import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    facultyId: z.string(),
    fullName: z.string(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const FacultyUncheckedCreateWithoutUserInputObjectSchema = Schema;
