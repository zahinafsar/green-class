import { z } from 'zod';
import { FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyRelationFilter> = z
  .object({
    is: z
      .lazy(() => FacultyWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FacultyWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FacultyRelationFilterObjectSchema = Schema;
