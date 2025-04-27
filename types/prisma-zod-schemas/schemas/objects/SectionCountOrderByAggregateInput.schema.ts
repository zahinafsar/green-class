import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    batch: z.lazy(() => SortOrderSchema).optional(),
    program: z.lazy(() => SortOrderSchema).optional(),
    subject: z.lazy(() => SortOrderSchema).optional(),
    section: z.lazy(() => SortOrderSchema).optional(),
    courseCode: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    roomId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SectionCountOrderByAggregateInputObjectSchema = Schema;
