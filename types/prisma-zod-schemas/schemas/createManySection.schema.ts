import { z } from 'zod';
import { SectionCreateManyInputObjectSchema } from './objects/SectionCreateManyInput.schema';

export const SectionCreateManySchema = z.object({
  data: z.union([
    SectionCreateManyInputObjectSchema,
    z.array(SectionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
