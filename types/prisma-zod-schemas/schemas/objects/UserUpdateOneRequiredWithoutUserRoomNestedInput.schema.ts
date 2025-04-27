import { z } from 'zod';
import { UserCreateWithoutUserRoomInputObjectSchema } from './UserCreateWithoutUserRoomInput.schema';
import { UserUncheckedCreateWithoutUserRoomInputObjectSchema } from './UserUncheckedCreateWithoutUserRoomInput.schema';
import { UserCreateOrConnectWithoutUserRoomInputObjectSchema } from './UserCreateOrConnectWithoutUserRoomInput.schema';
import { UserUpsertWithoutUserRoomInputObjectSchema } from './UserUpsertWithoutUserRoomInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUserRoomInputObjectSchema } from './UserUpdateWithoutUserRoomInput.schema';
import { UserUncheckedUpdateWithoutUserRoomInputObjectSchema } from './UserUncheckedUpdateWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserRoomNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUserRoomInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutUserRoomInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutUserRoomInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutUserRoomInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutUserRoomInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutUserRoomInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema =
  Schema;
