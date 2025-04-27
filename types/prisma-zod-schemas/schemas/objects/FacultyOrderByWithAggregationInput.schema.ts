import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FacultyCountOrderByAggregateInputObjectSchema } from './FacultyCountOrderByAggregateInput.schema';
import { FacultyMaxOrderByAggregateInputObjectSchema } from './FacultyMaxOrderByAggregateInput.schema';
import { FacultyMinOrderByAggregateInputObjectSchema } from './FacultyMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    facultyId: z.lazy(() => SortOrderSchema).optional(),
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
      .lazy(() => FacultyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => FacultyMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FacultyMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const FacultyOrderByWithAggregationInputObjectSchema = Schema;
