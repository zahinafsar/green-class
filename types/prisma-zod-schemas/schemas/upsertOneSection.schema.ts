import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';
import { SectionCreateInputObjectSchema } from './objects/SectionCreateInput.schema';
import { SectionUncheckedCreateInputObjectSchema } from './objects/SectionUncheckedCreateInput.schema';
import { SectionUpdateInputObjectSchema } from './objects/SectionUpdateInput.schema';
import { SectionUncheckedUpdateInputObjectSchema } from './objects/SectionUncheckedUpdateInput.schema';

export const SectionUpsertSchema = z.object({
  where: SectionWhereUniqueInputObjectSchema,
  create: z.union([
    SectionCreateInputObjectSchema,
    SectionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SectionUpdateInputObjectSchema,
    SectionUncheckedUpdateInputObjectSchema,
  ]),
});
