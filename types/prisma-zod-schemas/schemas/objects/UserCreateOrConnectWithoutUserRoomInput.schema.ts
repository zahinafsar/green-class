import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserRoomInputObjectSchema } from './UserCreateWithoutUserRoomInput.schema';
import { UserUncheckedCreateWithoutUserRoomInputObjectSchema } from './UserUncheckedCreateWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserRoomInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutUserRoomInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutUserRoomInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutUserRoomInputObjectSchema = Schema;
