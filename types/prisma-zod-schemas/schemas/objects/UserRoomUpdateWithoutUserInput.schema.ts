import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoomUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutUserRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    room: z
      .lazy(() => RoomUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserRoomUpdateWithoutUserInputObjectSchema = Schema;
