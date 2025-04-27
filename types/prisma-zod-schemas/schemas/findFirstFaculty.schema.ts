import { z } from 'zod';
import { FacultyOrderByWithRelationInputObjectSchema } from './objects/FacultyOrderByWithRelationInput.schema';
import { FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';
import { FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';
import { FacultyScalarFieldEnumSchema } from './enums/FacultyScalarFieldEnum.schema';

export const FacultyFindFirstSchema = z.object({
  orderBy: z
    .union([
      FacultyOrderByWithRelationInputObjectSchema,
      FacultyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FacultyWhereInputObjectSchema.optional(),
  cursor: FacultyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FacultyScalarFieldEnumSchema).optional(),
});
