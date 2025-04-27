import { z } from 'zod';
import { UserRoomWhereInputObjectSchema } from './objects/UserRoomWhereInput.schema';

export const UserRoomDeleteManySchema = z.object({
  where: UserRoomWhereInputObjectSchema.optional(),
});
