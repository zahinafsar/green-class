import { z } from 'zod';
import { RoomWhereInputObjectSchema } from './RoomWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomRelationFilter> = z
  .object({
    is: z
      .lazy(() => RoomWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RoomWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RoomRelationFilterObjectSchema = Schema;
