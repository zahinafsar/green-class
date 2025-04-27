import { z } from 'zod';
import { RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';
import { RoomCreateOrConnectWithoutMessagesInputObjectSchema } from './RoomCreateOrConnectWithoutMessagesInput.schema';
import { RoomUpsertWithoutMessagesInputObjectSchema } from './RoomUpsertWithoutMessagesInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutMessagesInputObjectSchema } from './RoomUpdateWithoutMessagesInput.schema';
import { RoomUncheckedUpdateWithoutMessagesInputObjectSchema } from './RoomUncheckedUpdateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutMessagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema),
          z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RoomCreateOrConnectWithoutMessagesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RoomUpsertWithoutMessagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoomUpdateWithoutMessagesInputObjectSchema),
          z.lazy(() => RoomUncheckedUpdateWithoutMessagesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoomUpdateOneRequiredWithoutMessagesNestedInputObjectSchema =
  Schema;
