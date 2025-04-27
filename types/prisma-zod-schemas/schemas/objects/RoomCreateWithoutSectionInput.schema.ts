import { z } from 'zod';
import { MessageCreateNestedManyWithoutRoomInputObjectSchema } from './MessageCreateNestedManyWithoutRoomInput.schema';
import { UserRoomCreateNestedManyWithoutRoomInputObjectSchema } from './UserRoomCreateNestedManyWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateWithoutSectionInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutRoomInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomCreateNestedManyWithoutRoomInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomCreateWithoutSectionInputObjectSchema = Schema;
