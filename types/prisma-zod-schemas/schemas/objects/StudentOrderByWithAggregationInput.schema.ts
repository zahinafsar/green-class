import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudentCountOrderByAggregateInputObjectSchema } from './StudentCountOrderByAggregateInput.schema';
import { StudentMaxOrderByAggregateInputObjectSchema } from './StudentMaxOrderByAggregateInput.schema';
import { StudentMinOrderByAggregateInputObjectSchema } from './StudentMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    studentId: z.lazy(() => SortOrderSchema).optional(),
    fullName: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StudentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => StudentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => StudentMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const StudentOrderByWithAggregationInputObjectSchema = Schema;
