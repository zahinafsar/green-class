import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';

export const SectionFindUniqueSchema = z.object({
  where: SectionWhereUniqueInputObjectSchema,
});
