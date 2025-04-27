import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutRoomInputObjectSchema } from './MessageUpdateWithoutRoomInput.schema';
import { MessageUncheckedUpdateWithoutRoomInputObjectSchema } from './MessageUncheckedUpdateWithoutRoomInput.schema';
import { MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutRoomInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MessageUpdateWithoutRoomInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutRoomInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MessageCreateWithoutRoomInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema = Schema;
