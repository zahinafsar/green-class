import { z } from 'zod';
import { UserRoomWhereInputObjectSchema } from './objects/UserRoomWhereInput.schema';
import { UserRoomOrderByWithAggregationInputObjectSchema } from './objects/UserRoomOrderByWithAggregationInput.schema';
import { UserRoomScalarWhereWithAggregatesInputObjectSchema } from './objects/UserRoomScalarWhereWithAggregatesInput.schema';
import { UserRoomScalarFieldEnumSchema } from './enums/UserRoomScalarFieldEnum.schema';

export const UserRoomGroupBySchema = z.object({
  where: UserRoomWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserRoomOrderByWithAggregationInputObjectSchema,
      UserRoomOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserRoomScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserRoomScalarFieldEnumSchema),
});
