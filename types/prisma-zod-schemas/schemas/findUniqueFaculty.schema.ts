import { z } from 'zod';
import { FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';

export const FacultyFindUniqueSchema = z.object({
  where: FacultyWhereUniqueInputObjectSchema,
});
