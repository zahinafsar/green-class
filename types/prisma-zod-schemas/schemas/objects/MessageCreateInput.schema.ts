import { z } from 'zod';
import { UserCreateNestedOneWithoutMessagesInputObjectSchema } from './UserCreateNestedOneWithoutMessagesInput.schema';
import { RoomCreateNestedOneWithoutMessagesInputObjectSchema } from './RoomCreateNestedOneWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutMessagesInputObjectSchema),
    room: z.lazy(() => RoomCreateNestedOneWithoutMessagesInputObjectSchema),
  })
  .strict();

export const MessageCreateInputObjectSchema = Schema;
