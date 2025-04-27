import { z } from 'zod';
import { RoomUpdateWithoutSectionInputObjectSchema } from './RoomUpdateWithoutSectionInput.schema';
import { RoomUncheckedUpdateWithoutSectionInputObjectSchema } from './RoomUncheckedUpdateWithoutSectionInput.schema';
import { RoomCreateWithoutSectionInputObjectSchema } from './RoomCreateWithoutSectionInput.schema';
import { RoomUncheckedCreateWithoutSectionInputObjectSchema } from './RoomUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpsertWithoutSectionInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoomUpdateWithoutSectionInputObjectSchema),
      z.lazy(() => RoomUncheckedUpdateWithoutSectionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoomCreateWithoutSectionInputObjectSchema),
      z.lazy(() => RoomUncheckedCreateWithoutSectionInputObjectSchema),
    ]),
  })
  .strict();

export const RoomUpsertWithoutSectionInputObjectSchema = Schema;
