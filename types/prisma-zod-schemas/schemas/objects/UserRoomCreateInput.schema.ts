import { z } from 'zod';
import { UserCreateNestedOneWithoutUserRoomInputObjectSchema } from './UserCreateNestedOneWithoutUserRoomInput.schema';
import { RoomCreateNestedOneWithoutUserRoomInputObjectSchema } from './RoomCreateNestedOneWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutUserRoomInputObjectSchema),
    room: z.lazy(() => RoomCreateNestedOneWithoutUserRoomInputObjectSchema),
  })
  .strict();

export const UserRoomCreateInputObjectSchema = Schema;
