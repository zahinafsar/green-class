import { z } from 'zod';
import { SectionOrderByWithRelationInputObjectSchema } from './objects/SectionOrderByWithRelationInput.schema';
import { SectionWhereInputObjectSchema } from './objects/SectionWhereInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';
import { SectionCountAggregateInputObjectSchema } from './objects/SectionCountAggregateInput.schema';
import { SectionMinAggregateInputObjectSchema } from './objects/SectionMinAggregateInput.schema';
import { SectionMaxAggregateInputObjectSchema } from './objects/SectionMaxAggregateInput.schema';

export const SectionAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), SectionCountAggregateInputObjectSchema])
    .optional(),
  _min: SectionMinAggregateInputObjectSchema.optional(),
  _max: SectionMaxAggregateInputObjectSchema.optional(),
});
