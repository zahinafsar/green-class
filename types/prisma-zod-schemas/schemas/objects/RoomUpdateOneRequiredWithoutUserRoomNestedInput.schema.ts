import { z } from 'zod';
import { RoomCreateWithoutUserRoomInputObjectSchema } from './RoomCreateWithoutUserRoomInput.schema';
import { RoomUncheckedCreateWithoutUserRoomInputObjectSchema } from './RoomUncheckedCreateWithoutUserRoomInput.schema';
import { RoomCreateOrConnectWithoutUserRoomInputObjectSchema } from './RoomCreateOrConnectWithoutUserRoomInput.schema';
import { RoomUpsertWithoutUserRoomInputObjectSchema } from './RoomUpsertWithoutUserRoomInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutUserRoomInputObjectSchema } from './RoomUpdateWithoutUserRoomInput.schema';
import { RoomUncheckedUpdateWithoutUserRoomInputObjectSchema } from './RoomUncheckedUpdateWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutUserRoomNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoomCreateWithoutUserRoomInputObjectSchema),
          z.lazy(() => RoomUncheckedCreateWithoutUserRoomInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RoomCreateOrConnectWithoutUserRoomInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RoomUpsertWithoutUserRoomInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoomUpdateWithoutUserRoomInputObjectSchema),
          z.lazy(() => RoomUncheckedUpdateWithoutUserRoomInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoomUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema =
  Schema;
