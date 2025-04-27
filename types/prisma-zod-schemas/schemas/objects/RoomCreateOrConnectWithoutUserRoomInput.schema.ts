import { z } from 'zod';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutUserRoomInputObjectSchema } from './RoomCreateWithoutUserRoomInput.schema';
import { RoomUncheckedCreateWithoutUserRoomInputObjectSchema } from './RoomUncheckedCreateWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutUserRoomInput> = z
  .object({
    where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoomCreateWithoutUserRoomInputObjectSchema),
      z.lazy(() => RoomUncheckedCreateWithoutUserRoomInputObjectSchema),
    ]),
  })
  .strict();

export const RoomCreateOrConnectWithoutUserRoomInputObjectSchema = Schema;
