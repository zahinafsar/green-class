import { z } from 'zod';
import { SectionWhereInputObjectSchema } from './SectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionRelationFilter> = z
  .object({
    is: z
      .lazy(() => SectionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SectionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SectionRelationFilterObjectSchema = Schema;
