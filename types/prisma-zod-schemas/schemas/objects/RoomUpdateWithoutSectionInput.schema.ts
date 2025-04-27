import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateManyWithoutRoomNestedInputObjectSchema } from './MessageUpdateManyWithoutRoomNestedInput.schema';
import { UserRoomUpdateManyWithoutRoomNestedInputObjectSchema } from './UserRoomUpdateManyWithoutRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpdateWithoutSectionInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutRoomNestedInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUpdateManyWithoutRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomUpdateWithoutSectionInputObjectSchema = Schema;
