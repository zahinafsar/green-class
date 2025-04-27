import { z } from 'zod';
import { RoomUpdateWithoutMessagesInputObjectSchema } from './RoomUpdateWithoutMessagesInput.schema';
import { RoomUncheckedUpdateWithoutMessagesInputObjectSchema } from './RoomUncheckedUpdateWithoutMessagesInput.schema';
import { RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpsertWithoutMessagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoomUpdateWithoutMessagesInputObjectSchema),
      z.lazy(() => RoomUncheckedUpdateWithoutMessagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const RoomUpsertWithoutMessagesInputObjectSchema = Schema;
