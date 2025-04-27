import { z } from 'zod';
import { RoomCreateNestedOneWithoutMessagesInputObjectSchema } from './RoomCreateNestedOneWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    room: z.lazy(() => RoomCreateNestedOneWithoutMessagesInputObjectSchema),
  })
  .strict();

export const MessageCreateWithoutUserInputObjectSchema = Schema;
