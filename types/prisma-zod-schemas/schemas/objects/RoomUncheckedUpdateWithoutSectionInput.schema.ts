import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUncheckedUpdateManyWithoutRoomNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutRoomNestedInput.schema';
import { UserRoomUncheckedUpdateManyWithoutRoomNestedInputObjectSchema } from './UserRoomUncheckedUpdateManyWithoutRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutSectionInput> = z
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
      .lazy(() => MessageUncheckedUpdateManyWithoutRoomNestedInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUncheckedUpdateManyWithoutRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomUncheckedUpdateWithoutSectionInputObjectSchema = Schema;
