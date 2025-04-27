import { z } from 'zod';
import { RoomWhereInputObjectSchema } from './objects/RoomWhereInput.schema';
import { RoomOrderByWithAggregationInputObjectSchema } from './objects/RoomOrderByWithAggregationInput.schema';
import { RoomScalarWhereWithAggregatesInputObjectSchema } from './objects/RoomScalarWhereWithAggregatesInput.schema';
import { RoomScalarFieldEnumSchema } from './enums/RoomScalarFieldEnum.schema';

export const RoomGroupBySchema = z.object({
  where: RoomWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RoomOrderByWithAggregationInputObjectSchema,
      RoomOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RoomScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RoomScalarFieldEnumSchema),
});
