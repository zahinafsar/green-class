import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomUpdateWithoutRoomInputObjectSchema } from './UserRoomUpdateWithoutRoomInput.schema';
import { UserRoomUncheckedUpdateWithoutRoomInputObjectSchema } from './UserRoomUncheckedUpdateWithoutRoomInput.schema';
import { UserRoomCreateWithoutRoomInputObjectSchema } from './UserRoomCreateWithoutRoomInput.schema';
import { UserRoomUncheckedCreateWithoutRoomInputObjectSchema } from './UserRoomUncheckedCreateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpsertWithWhereUniqueWithoutRoomInput> =
  z
    .object({
      where: z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserRoomUpdateWithoutRoomInputObjectSchema),
        z.lazy(() => UserRoomUncheckedUpdateWithoutRoomInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserRoomCreateWithoutRoomInputObjectSchema),
        z.lazy(() => UserRoomUncheckedCreateWithoutRoomInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoomUpsertWithWhereUniqueWithoutRoomInputObjectSchema = Schema;
