import { z } from 'zod';
import { UserRoomScalarWhereInputObjectSchema } from './UserRoomScalarWhereInput.schema';
import { UserRoomUpdateManyMutationInputObjectSchema } from './UserRoomUpdateManyMutationInput.schema';
import { UserRoomUncheckedUpdateManyWithoutUserRoomInputObjectSchema } from './UserRoomUncheckedUpdateManyWithoutUserRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateManyWithWhereWithoutRoomInput> = z
  .object({
    where: z.lazy(() => UserRoomScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserRoomUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserRoomUncheckedUpdateManyWithoutUserRoomInputObjectSchema),
    ]),
  })
  .strict();

export const UserRoomUpdateManyWithWhereWithoutRoomInputObjectSchema = Schema;
