import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutRoomInputObjectSchema } from './MessageUpdateWithoutRoomInput.schema';
import { MessageUncheckedUpdateWithoutRoomInputObjectSchema } from './MessageUncheckedUpdateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutRoomInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MessageUpdateWithoutRoomInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutRoomInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema = Schema;
