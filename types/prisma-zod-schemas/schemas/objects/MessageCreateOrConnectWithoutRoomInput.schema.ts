import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutRoomInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutRoomInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema),
    ]),
  })
  .strict();

export const MessageCreateOrConnectWithoutRoomInputObjectSchema = Schema;
