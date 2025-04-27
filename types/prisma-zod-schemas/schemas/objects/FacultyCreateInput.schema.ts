import { z } from 'zod';
import { UserCreateNestedOneWithoutFacultyInputObjectSchema } from './UserCreateNestedOneWithoutFacultyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyCreateInput> = z
  .object({
    id: z.string().optional(),
    facultyId: z.string(),
    fullName: z.string(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutFacultyInputObjectSchema),
  })
  .strict();

export const FacultyCreateInputObjectSchema = Schema;
