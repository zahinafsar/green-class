import { z } from 'zod';
import { RoomCreateInputObjectSchema } from './objects/RoomCreateInput.schema';
import { RoomUncheckedCreateInputObjectSchema } from './objects/RoomUncheckedCreateInput.schema';

export const RoomCreateOneSchema = z.object({
  data: z.union([
    RoomCreateInputObjectSchema,
    RoomUncheckedCreateInputObjectSchema,
  ]),
});
