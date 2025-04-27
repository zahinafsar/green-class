import { z } from 'zod';
import { SectionCreateNestedOneWithoutRoomInputObjectSchema } from './SectionCreateNestedOneWithoutRoomInput.schema';
import { UserRoomCreateNestedManyWithoutRoomInputObjectSchema } from './UserRoomCreateNestedManyWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateWithoutMessagesInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    section: z
      .lazy(() => SectionCreateNestedOneWithoutRoomInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomCreateNestedManyWithoutRoomInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomCreateWithoutMessagesInputObjectSchema = Schema;
