import { z } from 'zod';
import { UserRoomUpdateManyMutationInputObjectSchema } from './objects/UserRoomUpdateManyMutationInput.schema';
import { UserRoomWhereInputObjectSchema } from './objects/UserRoomWhereInput.schema';

export const UserRoomUpdateManySchema = z.object({
  data: UserRoomUpdateManyMutationInputObjectSchema,
  where: UserRoomWhereInputObjectSchema.optional(),
});
