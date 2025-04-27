import { z } from 'zod';
import { RoomCreateWithoutSectionInputObjectSchema } from './RoomCreateWithoutSectionInput.schema';
import { RoomUncheckedCreateWithoutSectionInputObjectSchema } from './RoomUncheckedCreateWithoutSectionInput.schema';
import { RoomCreateOrConnectWithoutSectionInputObjectSchema } from './RoomCreateOrConnectWithoutSectionInput.schema';
import { RoomUpsertWithoutSectionInputObjectSchema } from './RoomUpsertWithoutSectionInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutSectionInputObjectSchema } from './RoomUpdateWithoutSectionInput.schema';
import { RoomUncheckedUpdateWithoutSectionInputObjectSchema } from './RoomUncheckedUpdateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutSectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoomCreateWithoutSectionInputObjectSchema),
          z.lazy(() => RoomUncheckedCreateWithoutSectionInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RoomCreateOrConnectWithoutSectionInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RoomUpsertWithoutSectionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoomUpdateWithoutSectionInputObjectSchema),
          z.lazy(() => RoomUncheckedUpdateWithoutSectionInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoomUpdateOneRequiredWithoutSectionNestedInputObjectSchema =
  Schema;
