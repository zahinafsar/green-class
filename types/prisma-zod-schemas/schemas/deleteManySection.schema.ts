import { z } from 'zod';
import { SectionWhereInputObjectSchema } from './objects/SectionWhereInput.schema';

export const SectionDeleteManySchema = z.object({
  where: SectionWhereInputObjectSchema.optional(),
});
