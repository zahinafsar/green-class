import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './objects/UserRoomWhereUniqueInput.schema';

export const UserRoomFindUniqueSchema = z.object({
  where: UserRoomWhereUniqueInputObjectSchema,
});
