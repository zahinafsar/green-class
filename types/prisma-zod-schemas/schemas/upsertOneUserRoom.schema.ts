import { z } from 'zod';
import { UserRoomWhereUniqueInputObjectSchema } from './objects/UserRoomWhereUniqueInput.schema';
import { UserRoomCreateInputObjectSchema } from './objects/UserRoomCreateInput.schema';
import { UserRoomUncheckedCreateInputObjectSchema } from './objects/UserRoomUncheckedCreateInput.schema';
import { UserRoomUpdateInputObjectSchema } from './objects/UserRoomUpdateInput.schema';
import { UserRoomUncheckedUpdateInputObjectSchema } from './objects/UserRoomUncheckedUpdateInput.schema';

export const UserRoomUpsertSchema = z.object({
  where: UserRoomWhereUniqueInputObjectSchema,
  create: z.union([
    UserRoomCreateInputObjectSchema,
    UserRoomUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UserRoomUpdateInputObjectSchema,
    UserRoomUncheckedUpdateInputObjectSchema,
  ]),
});
