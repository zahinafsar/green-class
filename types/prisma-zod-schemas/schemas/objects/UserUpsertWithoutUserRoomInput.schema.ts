import { z } from 'zod';
import { UserUpdateWithoutUserRoomInputObjectSchema } from './UserUpdateWithoutUserRoomInput.schema';
import { UserUncheckedUpdateWithoutUserRoomInputObjectSchema } from './UserUncheckedUpdateWithoutUserRoomInput.schema';
import { UserCreateWithoutUserRoomInputObjectSchema } from './UserCreateWithoutUserRoomInput.schema';
import { UserUncheckedCreateWithoutUserRoomInputObjectSchema } from './UserUncheckedCreateWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutUserRoomInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutUserRoomInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutUserRoomInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutUserRoomInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutUserRoomInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutUserRoomInputObjectSchema = Schema;
