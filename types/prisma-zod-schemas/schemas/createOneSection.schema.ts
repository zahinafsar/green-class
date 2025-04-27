import { z } from 'zod';
import { SectionCreateInputObjectSchema } from './objects/SectionCreateInput.schema';
import { SectionUncheckedCreateInputObjectSchema } from './objects/SectionUncheckedCreateInput.schema';

export const SectionCreateOneSchema = z.object({
  data: z.union([
    SectionCreateInputObjectSchema,
    SectionUncheckedCreateInputObjectSchema,
  ]),
});
