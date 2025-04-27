import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutUserRoomNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUserRoomNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateWithoutRoomInput> = z
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
  })
  .strict();

export const UserRoomUpdateWithoutRoomInputObjectSchema = Schema;
