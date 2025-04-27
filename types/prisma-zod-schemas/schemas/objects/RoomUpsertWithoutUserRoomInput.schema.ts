import { z } from 'zod';
import { RoomUpdateWithoutUserRoomInputObjectSchema } from './RoomUpdateWithoutUserRoomInput.schema';
import { RoomUncheckedUpdateWithoutUserRoomInputObjectSchema } from './RoomUncheckedUpdateWithoutUserRoomInput.schema';
import { RoomCreateWithoutUserRoomInputObjectSchema } from './RoomCreateWithoutUserRoomInput.schema';
import { RoomUncheckedCreateWithoutUserRoomInputObjectSchema } from './RoomUncheckedCreateWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpsertWithoutUserRoomInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoomUpdateWithoutUserRoomInputObjectSchema),
      z.lazy(() => RoomUncheckedUpdateWithoutUserRoomInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoomCreateWithoutUserRoomInputObjectSchema),
      z.lazy(() => RoomUncheckedCreateWithoutUserRoomInputObjectSchema),
    ]),
  })
  .strict();

export const RoomUpsertWithoutUserRoomInputObjectSchema = Schema;
