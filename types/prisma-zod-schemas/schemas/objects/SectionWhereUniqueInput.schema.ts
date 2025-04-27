import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    roomId: z.string().optional(),
  })
  .strict();

export const SectionWhereUniqueInputObjectSchema = Schema;
