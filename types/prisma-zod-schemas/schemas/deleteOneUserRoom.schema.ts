import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './objects/UserRoomWhereUniqueInput.schema';

export const UserRoomDeleteOneSchema = z.object({
  where: UserRoomWhereUniqueInputObjectSchema,
});
