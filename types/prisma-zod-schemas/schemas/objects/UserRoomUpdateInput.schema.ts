import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUserRoomNestedInput.schema';
import { RoomUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutUserRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema)
      .optional(),
    room: z
      .lazy(() => RoomUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserRoomUpdateInputObjectSchema = Schema;
