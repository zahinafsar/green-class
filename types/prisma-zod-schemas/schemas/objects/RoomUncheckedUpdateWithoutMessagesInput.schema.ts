import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SectionUncheckedUpdateOneWithoutRoomNestedInputObjectSchema } from './SectionUncheckedUpdateOneWithoutRoomNestedInput.schema';
import { UserRoomUncheckedUpdateManyWithoutRoomNestedInputObjectSchema } from './UserRoomUncheckedUpdateManyWithoutRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutMessagesInput> = z
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
    section: z
      .lazy(() => SectionUncheckedUpdateOneWithoutRoomNestedInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUncheckedUpdateManyWithoutRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomUncheckedUpdateWithoutMessagesInputObjectSchema = Schema;
