import { z } from 'zod';
import { RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomFindUniqueSchema = z.object({
  where: RoomWhereUniqueInputObjectSchema,
});
