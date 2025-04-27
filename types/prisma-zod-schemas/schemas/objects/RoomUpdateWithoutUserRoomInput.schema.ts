import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateManyWithoutRoomNestedInputObjectSchema } from './MessageUpdateManyWithoutRoomNestedInput.schema';
import { SectionUpdateOneWithoutRoomNestedInputObjectSchema } from './SectionUpdateOneWithoutRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpdateWithoutUserRoomInput> = z
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
    section: z
      .lazy(() => SectionUpdateOneWithoutRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomUpdateWithoutUserRoomInputObjectSchema = Schema;
