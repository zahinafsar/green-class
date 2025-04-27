import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    batch: z.literal(true).optional(),
    program: z.literal(true).optional(),
    subject: z.literal(true).optional(),
    section: z.literal(true).optional(),
    courseCode: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    roomId: z.literal(true).optional(),
  })
  .strict();

export const SectionMinAggregateInputObjectSchema = Schema;
