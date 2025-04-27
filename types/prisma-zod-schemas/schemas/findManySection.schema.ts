import { z } from 'zod';
import { SectionOrderByWithRelationInputObjectSchema } from './objects/SectionOrderByWithRelationInput.schema';
import { SectionWhereInputObjectSchema } from './objects/SectionWhereInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';
import { SectionScalarFieldEnumSchema } from './enums/SectionScalarFieldEnum.schema';

export const SectionFindManySchema = z.object({
  orderBy: z
    .union([
      SectionOrderByWithRelationInputObjectSchema,
      SectionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SectionWhereInputObjectSchema.optional(),
  cursor: SectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SectionScalarFieldEnumSchema).optional(),
});
