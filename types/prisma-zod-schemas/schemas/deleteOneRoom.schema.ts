import { z } from 'zod';
import { RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomDeleteOneSchema = z.object({
  where: RoomWhereUniqueInputObjectSchema,
});
