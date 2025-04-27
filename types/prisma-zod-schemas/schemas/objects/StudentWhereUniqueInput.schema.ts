import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string().optional(),
    studentId: z.string().optional(),
  })
  .strict();

export const StudentWhereUniqueInputObjectSchema = Schema;
