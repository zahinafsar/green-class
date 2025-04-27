import { z } from 'zod';
import { RoomCreateNestedOneWithoutSectionInputObjectSchema } from './RoomCreateNestedOneWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateInput> = z
  .object({
    id: z.string().optional(),
    batch: z.string(),
    program: z.string(),
    subject: z.string(),
    section: z.string(),
    courseCode: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    room: z.lazy(() => RoomCreateNestedOneWithoutSectionInputObjectSchema),
  })
  .strict();

export const SectionCreateInputObjectSchema = Schema;
