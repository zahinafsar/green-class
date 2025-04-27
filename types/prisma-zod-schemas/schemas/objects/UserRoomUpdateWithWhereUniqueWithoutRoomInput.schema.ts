import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomUpdateWithoutRoomInputObjectSchema } from './UserRoomUpdateWithoutRoomInput.schema';
import { UserRoomUncheckedUpdateWithoutRoomInputObjectSchema } from './UserRoomUncheckedUpdateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateWithWhereUniqueWithoutRoomInput> =
  z
    .object({
      where: z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserRoomUpdateWithoutRoomInputObjectSchema),
        z.lazy(() => UserRoomUncheckedUpdateWithoutRoomInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoomUpdateWithWhereUniqueWithoutRoomInputObjectSchema = Schema;
