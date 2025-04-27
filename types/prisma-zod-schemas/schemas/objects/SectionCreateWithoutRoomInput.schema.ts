import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateWithoutRoomInput> = z
  .object({
    id: z.string().optional(),
    batch: z.string(),
    program: z.string(),
    subject: z.string(),
    section: z.string(),
    courseCode: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const SectionCreateWithoutRoomInputObjectSchema = Schema;
