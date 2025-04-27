import { z } from 'zod';
import { MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutRoomInput.schema';
import { SectionUncheckedCreateNestedOneWithoutRoomInputObjectSchema } from './SectionUncheckedCreateNestedOneWithoutRoomInput.schema';
import { UserRoomUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './UserRoomUncheckedCreateNestedManyWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    messages: z
      .lazy(() => MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema)
      .optional(),
    section: z
      .lazy(() => SectionUncheckedCreateNestedOneWithoutRoomInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUncheckedCreateNestedManyWithoutRoomInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomUncheckedCreateInputObjectSchema = Schema;
