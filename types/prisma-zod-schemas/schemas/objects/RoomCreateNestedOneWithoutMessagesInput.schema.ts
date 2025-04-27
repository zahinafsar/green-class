import { z } from 'zod';
import { RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';
import { RoomCreateOrConnectWithoutMessagesInputObjectSchema } from './RoomCreateOrConnectWithoutMessagesInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateNestedOneWithoutMessagesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema),
        z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoomCreateOrConnectWithoutMessagesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoomCreateNestedOneWithoutMessagesInputObjectSchema = Schema;
