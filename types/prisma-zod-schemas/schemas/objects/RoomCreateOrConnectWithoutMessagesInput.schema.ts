import { z } from 'zod';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutMessagesInput> = z
  .object({
    where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const RoomCreateOrConnectWithoutMessagesInputObjectSchema = Schema;
