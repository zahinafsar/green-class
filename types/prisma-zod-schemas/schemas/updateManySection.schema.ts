import { z } from 'zod';
import { SectionUpdateManyMutationInputObjectSchema } from './objects/SectionUpdateManyMutationInput.schema';
import { SectionWhereInputObjectSchema } from './objects/SectionWhereInput.schema';

export const SectionUpdateManySchema = z.object({
  data: SectionUpdateManyMutationInputObjectSchema,
  where: SectionWhereInputObjectSchema.optional(),
});
