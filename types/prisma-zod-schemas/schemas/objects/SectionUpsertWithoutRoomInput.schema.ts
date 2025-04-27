import { z } from 'zod';
import { SectionUpdateWithoutRoomInputObjectSchema } from './SectionUpdateWithoutRoomInput.schema';
import { SectionUncheckedUpdateWithoutRoomInputObjectSchema } from './SectionUncheckedUpdateWithoutRoomInput.schema';
import { SectionCreateWithoutRoomInputObjectSchema } from './SectionCreateWithoutRoomInput.schema';
import { SectionUncheckedCreateWithoutRoomInputObjectSchema } from './SectionUncheckedCreateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpsertWithoutRoomInput> = z
  .object({
    update: z.union([
      z.lazy(() => SectionUpdateWithoutRoomInputObjectSchema),
      z.lazy(() => SectionUncheckedUpdateWithoutRoomInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SectionCreateWithoutRoomInputObjectSchema),
      z.lazy(() => SectionUncheckedCreateWithoutRoomInputObjectSchema),
    ]),
  })
  .strict();

export const SectionUpsertWithoutRoomInputObjectSchema = Schema;
