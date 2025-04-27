import { z } from 'zod';
import { MessageCreateNestedManyWithoutRoomInputObjectSchema } from './MessageCreateNestedManyWithoutRoomInput.schema';
import { SectionCreateNestedOneWithoutRoomInputObjectSchema } from './SectionCreateNestedOneWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateWithoutUserRoomInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutRoomInputObjectSchema)
      .optional(),
    section: z
      .lazy(() => SectionCreateNestedOneWithoutRoomInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomCreateWithoutUserRoomInputObjectSchema = Schema;
