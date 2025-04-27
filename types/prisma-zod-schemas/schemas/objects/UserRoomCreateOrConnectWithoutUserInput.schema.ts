import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomCreateWithoutUserInputObjectSchema } from './UserRoomCreateWithoutUserInput.schema';
import { UserRoomUncheckedCreateWithoutUserInputObjectSchema } from './UserRoomUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserRoomCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserRoomUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserRoomCreateOrConnectWithoutUserInputObjectSchema = Schema;
