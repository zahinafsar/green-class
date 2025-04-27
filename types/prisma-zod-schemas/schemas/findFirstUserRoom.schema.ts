import { z } from 'zod';
import { UserRoomOrderByWithRelationInputObjectSchema } from './objects/UserRoomOrderByWithRelationInput.schema';
import { UserRoomWhereInputObjectSchema } from './objects/UserRoomWhereInput.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './objects/UserRoomWhereUniqueInput.schema';
import { UserRoomScalarFieldEnumSchema } from './enums/UserRoomScalarFieldEnum.schema';

export const UserRoomFindFirstSchema = z.object({
  orderBy: z
    .union([
      UserRoomOrderByWithRelationInputObjectSchema,
      UserRoomOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserRoomWhereInputObjectSchema.optional(),
  cursor: UserRoomWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserRoomScalarFieldEnumSchema).optional(),
});
