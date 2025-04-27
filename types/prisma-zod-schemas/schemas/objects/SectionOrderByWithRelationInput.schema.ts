import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionOrderByWithRelationInput> = z
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
    room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SectionOrderByWithRelationInputObjectSchema = Schema;
