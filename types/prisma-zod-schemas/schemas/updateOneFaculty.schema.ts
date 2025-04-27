import { z } from 'zod';
import { FacultyUpdateInputObjectSchema } from './objects/FacultyUpdateInput.schema';
import { FacultyUncheckedUpdateInputObjectSchema } from './objects/FacultyUncheckedUpdateInput.schema';
import { FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';

export const FacultyUpdateOneSchema = z.object({
  data: z.union([
    FacultyUpdateInputObjectSchema,
    FacultyUncheckedUpdateInputObjectSchema,
  ]),
  where: FacultyWhereUniqueInputObjectSchema,
});
