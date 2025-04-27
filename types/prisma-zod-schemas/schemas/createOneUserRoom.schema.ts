import { z } from 'zod';
import { UserRoomCreateInputObjectSchema } from './objects/UserRoomCreateInput.schema';
import { UserRoomUncheckedCreateInputObjectSchema } from './objects/UserRoomUncheckedCreateInput.schema';

export const UserRoomCreateOneSchema = z.object({
  data: z.union([
    UserRoomCreateInputObjectSchema,
    UserRoomUncheckedCreateInputObjectSchema,
  ]),
});
