import { z } from 'zod';
import { SectionCreateWithoutRoomInputObjectSchema } from './SectionCreateWithoutRoomInput.schema';
import { SectionUncheckedCreateWithoutRoomInputObjectSchema } from './SectionUncheckedCreateWithoutRoomInput.schema';
import { SectionCreateOrConnectWithoutRoomInputObjectSchema } from './SectionCreateOrConnectWithoutRoomInput.schema';
import { SectionUpsertWithoutRoomInputObjectSchema } from './SectionUpsertWithoutRoomInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionUpdateWithoutRoomInputObjectSchema } from './SectionUpdateWithoutRoomInput.schema';
import { SectionUncheckedUpdateWithoutRoomInputObjectSchema } from './SectionUncheckedUpdateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUncheckedUpdateOneWithoutRoomNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SectionCreateWithoutRoomInputObjectSchema),
          z.lazy(() => SectionUncheckedCreateWithoutRoomInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SectionCreateOrConnectWithoutRoomInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SectionUpsertWithoutRoomInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => SectionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SectionUpdateWithoutRoomInputObjectSchema),
          z.lazy(() => SectionUncheckedUpdateWithoutRoomInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SectionUncheckedUpdateOneWithoutRoomNestedInputObjectSchema =
  Schema;
