import { z } from 'zod';
import { UserRoomCreateManyInputObjectSchema } from './objects/UserRoomCreateManyInput.schema';

export const UserRoomCreateManySchema = z.object({
  data: z.union([
    UserRoomCreateManyInputObjectSchema,
    z.array(UserRoomCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
