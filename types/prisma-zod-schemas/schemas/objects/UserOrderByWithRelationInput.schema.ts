import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { StudentOrderByWithRelationInputObjectSchema } from './StudentOrderByWithRelationInput.schema';
import { FacultyOrderByWithRelationInputObjectSchema } from './FacultyOrderByWithRelationInput.schema';
import { UserRoomOrderByRelationAggregateInputObjectSchema } from './UserRoomOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    student: z
      .lazy(() => StudentOrderByWithRelationInputObjectSchema)
      .optional(),
    faculty: z
      .lazy(() => FacultyOrderByWithRelationInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
