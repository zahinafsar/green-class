import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SectionCountOrderByAggregateInputObjectSchema } from './SectionCountOrderByAggregateInput.schema';
import { SectionMaxOrderByAggregateInputObjectSchema } from './SectionMaxOrderByAggregateInput.schema';
import { SectionMinOrderByAggregateInputObjectSchema } from './SectionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => SectionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SectionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SectionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SectionOrderByWithAggregationInputObjectSchema = Schema;
