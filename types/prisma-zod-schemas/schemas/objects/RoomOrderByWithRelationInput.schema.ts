import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { SectionOrderByWithRelationInputObjectSchema } from './SectionOrderByWithRelationInput.schema';
import { UserRoomOrderByRelationAggregateInputObjectSchema } from './UserRoomOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    section: z
      .lazy(() => SectionOrderByWithRelationInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomOrderByWithRelationInputObjectSchema = Schema;
