import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomUpdateWithoutUserInputObjectSchema } from './UserRoomUpdateWithoutUserInput.schema';
import { UserRoomUncheckedUpdateWithoutUserInputObjectSchema } from './UserRoomUncheckedUpdateWithoutUserInput.schema';
import { UserRoomCreateWithoutUserInputObjectSchema } from './UserRoomCreateWithoutUserInput.schema';
import { UserRoomUncheckedCreateWithoutUserInputObjectSchema } from './UserRoomUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserRoomUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoomUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserRoomCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoomUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoomUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
