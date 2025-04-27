import { z } from 'zod';
import { SectionUpdateInputObjectSchema } from './objects/SectionUpdateInput.schema';
import { SectionUncheckedUpdateInputObjectSchema } from './objects/SectionUncheckedUpdateInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';

export const SectionUpdateOneSchema = z.object({
  data: z.union([
    SectionUpdateInputObjectSchema,
    SectionUncheckedUpdateInputObjectSchema,
  ]),
  where: SectionWhereUniqueInputObjectSchema,
});
