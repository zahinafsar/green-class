import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoomCountOrderByAggregateInputObjectSchema } from './RoomCountOrderByAggregateInput.schema';
import { RoomMaxOrderByAggregateInputObjectSchema } from './RoomMaxOrderByAggregateInput.schema';
import { RoomMinOrderByAggregateInputObjectSchema } from './RoomMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RoomCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RoomMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RoomMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RoomOrderByWithAggregationInputObjectSchema = Schema;
