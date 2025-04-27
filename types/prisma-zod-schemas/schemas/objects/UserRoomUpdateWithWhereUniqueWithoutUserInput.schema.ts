import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomUpdateWithoutUserInputObjectSchema } from './UserRoomUpdateWithoutUserInput.schema';
import { UserRoomUncheckedUpdateWithoutUserInputObjectSchema } from './UserRoomUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserRoomUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoomUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoomUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
