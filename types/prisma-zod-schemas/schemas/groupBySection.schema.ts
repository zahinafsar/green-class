import { z } from 'zod';
import { SectionWhereInputObjectSchema } from './objects/SectionWhereInput.schema';
import { SectionOrderByWithAggregationInputObjectSchema } from './objects/SectionOrderByWithAggregationInput.schema';
import { SectionScalarWhereWithAggregatesInputObjectSchema } from './objects/SectionScalarWhereWithAggregatesInput.schema';
import { SectionScalarFieldEnumSchema } from './enums/SectionScalarFieldEnum.schema';

export const SectionGroupBySchema = z.object({
  where: SectionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SectionOrderByWithAggregationInputObjectSchema,
      SectionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SectionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SectionScalarFieldEnumSchema),
});
