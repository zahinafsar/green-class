import { z } from 'zod';
import { RoomUpdateInputObjectSchema } from './objects/RoomUpdateInput.schema';
import { RoomUncheckedUpdateInputObjectSchema } from './objects/RoomUncheckedUpdateInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomUpdateOneSchema = z.object({
  data: z.union([
    RoomUpdateInputObjectSchema,
    RoomUncheckedUpdateInputObjectSchema,
  ]),
  where: RoomWhereUniqueInputObjectSchema,
});
