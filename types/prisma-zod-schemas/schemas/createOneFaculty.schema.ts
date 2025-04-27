import { z } from 'zod';
import { FacultyCreateInputObjectSchema } from './objects/FacultyCreateInput.schema';
import { FacultyUncheckedCreateInputObjectSchema } from './objects/FacultyUncheckedCreateInput.schema';

export const FacultyCreateOneSchema = z.object({
  data: z.union([
    FacultyCreateInputObjectSchema,
    FacultyUncheckedCreateInputObjectSchema,
  ]),
});
