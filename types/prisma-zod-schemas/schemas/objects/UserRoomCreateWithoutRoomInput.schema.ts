import { z } from 'zod';
import { UserCreateNestedOneWithoutUserRoomInputObjectSchema } from './UserCreateNestedOneWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateWithoutRoomInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutUserRoomInputObjectSchema),
  })
  .strict();

export const UserRoomCreateWithoutRoomInputObjectSchema = Schema;
