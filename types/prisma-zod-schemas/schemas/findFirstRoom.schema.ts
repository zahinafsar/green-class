import { z } from 'zod';
import { RoomOrderByWithRelationInputObjectSchema } from './objects/RoomOrderByWithRelationInput.schema';
import { RoomWhereInputObjectSchema } from './objects/RoomWhereInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';
import { RoomScalarFieldEnumSchema } from './enums/RoomScalarFieldEnum.schema';

export const RoomFindFirstSchema = z.object({
  orderBy: z
    .union([
      RoomOrderByWithRelationInputObjectSchema,
      RoomOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RoomWhereInputObjectSchema.optional(),
  cursor: RoomWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RoomScalarFieldEnumSchema).optional(),
});
