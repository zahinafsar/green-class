import { z } from 'zod';
import { UserRoomUpdateInputObjectSchema } from './objects/UserRoomUpdateInput.schema';
import { UserRoomUncheckedUpdateInputObjectSchema } from './objects/UserRoomUncheckedUpdateInput.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './objects/UserRoomWhereUniqueInput.schema';

export const UserRoomUpdateOneSchema = z.object({
  data: z.union([
    UserRoomUpdateInputObjectSchema,
    UserRoomUncheckedUpdateInputObjectSchema,
  ]),
  where: UserRoomWhereUniqueInputObjectSchema,
});
