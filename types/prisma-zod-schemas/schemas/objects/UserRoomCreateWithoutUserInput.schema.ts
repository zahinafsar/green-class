import { z } from 'zod';
import { RoomCreateNestedOneWithoutUserRoomInputObjectSchema } from './RoomCreateNestedOneWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    room: z.lazy(() => RoomCreateNestedOneWithoutUserRoomInputObjectSchema),
  })
  .strict();

export const UserRoomCreateWithoutUserInputObjectSchema = Schema;
