import { z } from 'zod';
import { FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';

export const FacultyDeleteOneSchema = z.object({
  where: FacultyWhereUniqueInputObjectSchema,
});
