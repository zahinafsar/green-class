import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserRoomCountOrderByAggregateInputObjectSchema } from './UserRoomCountOrderByAggregateInput.schema';
import { UserRoomMaxOrderByAggregateInputObjectSchema } from './UserRoomMaxOrderByAggregateInput.schema';
import { UserRoomMinOrderByAggregateInputObjectSchema } from './UserRoomMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    roomId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserRoomCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => UserRoomMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserRoomMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UserRoomOrderByWithAggregationInputObjectSchema = Schema;
