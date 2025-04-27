import { z } from 'zod';
import { RoomCreateWithoutUserRoomInputObjectSchema } from './RoomCreateWithoutUserRoomInput.schema';
import { RoomUncheckedCreateWithoutUserRoomInputObjectSchema } from './RoomUncheckedCreateWithoutUserRoomInput.schema';
import { RoomCreateOrConnectWithoutUserRoomInputObjectSchema } from './RoomCreateOrConnectWithoutUserRoomInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateNestedOneWithoutUserRoomInput> = z
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
    connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoomCreateNestedOneWithoutUserRoomInputObjectSchema = Schema;
