import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomCreateWithoutRoomInputObjectSchema } from './UserRoomCreateWithoutRoomInput.schema';
import { UserRoomUncheckedCreateWithoutRoomInputObjectSchema } from './UserRoomUncheckedCreateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateOrConnectWithoutRoomInput> = z
  .object({
    where: z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserRoomCreateWithoutRoomInputObjectSchema),
      z.lazy(() => UserRoomUncheckedCreateWithoutRoomInputObjectSchema),
    ]),
  })
  .strict();

export const UserRoomCreateOrConnectWithoutRoomInputObjectSchema = Schema;
