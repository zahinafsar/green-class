import { z } from 'zod';
import { UserRoomOrderByWithRelationInputObjectSchema } from './objects/UserRoomOrderByWithRelationInput.schema';
import { UserRoomWhereInputObjectSchema } from './objects/UserRoomWhereInput.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './objects/UserRoomWhereUniqueInput.schema';
import { UserRoomCountAggregateInputObjectSchema } from './objects/UserRoomCountAggregateInput.schema';
import { UserRoomMinAggregateInputObjectSchema } from './objects/UserRoomMinAggregateInput.schema';
import { UserRoomMaxAggregateInputObjectSchema } from './objects/UserRoomMaxAggregateInput.schema';

export const UserRoomAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), UserRoomCountAggregateInputObjectSchema])
    .optional(),
  _min: UserRoomMinAggregateInputObjectSchema.optional(),
  _max: UserRoomMaxAggregateInputObjectSchema.optional(),
});
