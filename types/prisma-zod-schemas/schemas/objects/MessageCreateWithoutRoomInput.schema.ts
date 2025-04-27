import { z } from 'zod';
import { UserCreateNestedOneWithoutMessagesInputObjectSchema } from './UserCreateNestedOneWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutRoomInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutMessagesInputObjectSchema),
  })
  .strict();

export const MessageCreateWithoutRoomInputObjectSchema = Schema;
