import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SectionUpdateOneWithoutRoomNestedInputObjectSchema } from './SectionUpdateOneWithoutRoomNestedInput.schema';
import { UserRoomUpdateManyWithoutRoomNestedInputObjectSchema } from './UserRoomUpdateManyWithoutRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomUpdateWithoutMessagesInput> = z
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
      .lazy(() => SectionUpdateOneWithoutRoomNestedInputObjectSchema)
      .optional(),
    userRoom: z
      .lazy(() => UserRoomUpdateManyWithoutRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoomUpdateWithoutMessagesInputObjectSchema = Schema;
