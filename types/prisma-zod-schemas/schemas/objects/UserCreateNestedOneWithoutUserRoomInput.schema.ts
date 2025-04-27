import { z } from 'zod';
import { UserCreateWithoutUserRoomInputObjectSchema } from './UserCreateWithoutUserRoomInput.schema';
import { UserUncheckedCreateWithoutUserRoomInputObjectSchema } from './UserUncheckedCreateWithoutUserRoomInput.schema';
import { UserCreateOrConnectWithoutUserRoomInputObjectSchema } from './UserCreateOrConnectWithoutUserRoomInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserRoomInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutUserRoomInputObjectSchema = Schema;
