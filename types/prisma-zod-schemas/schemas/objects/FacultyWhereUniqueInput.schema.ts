import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string().optional(),
    facultyId: z.string().optional(),
  })
  .strict();

export const FacultyWhereUniqueInputObjectSchema = Schema;
