import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';

export const SectionDeleteOneSchema = z.object({
  where: SectionWhereUniqueInputObjectSchema,
});
