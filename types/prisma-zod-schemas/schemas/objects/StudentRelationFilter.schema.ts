import { z } from 'zod';
import { StudentWhereInputObjectSchema } from './StudentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentRelationFilter> = z
  .object({
    is: z
      .lazy(() => StudentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => StudentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StudentRelationFilterObjectSchema = Schema;
