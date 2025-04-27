import { z } from 'zod';
import { RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';
import { RoomCreateInputObjectSchema } from './objects/RoomCreateInput.schema';
import { RoomUncheckedCreateInputObjectSchema } from './objects/RoomUncheckedCreateInput.schema';
import { RoomUpdateInputObjectSchema } from './objects/RoomUpdateInput.schema';
import { RoomUncheckedUpdateInputObjectSchema } from './objects/RoomUncheckedUpdateInput.schema';

export const RoomUpsertSchema = z.object({
  where: RoomWhereUniqueInputObjectSchema,
  create: z.union([
    RoomCreateInputObjectSchema,
    RoomUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RoomUpdateInputObjectSchema,
    RoomUncheckedUpdateInputObjectSchema,
  ]),
});
