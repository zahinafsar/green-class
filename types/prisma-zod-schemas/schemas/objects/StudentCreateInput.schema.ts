import { z } from 'zod';
import { UserCreateNestedOneWithoutStudentInputObjectSchema } from './UserCreateNestedOneWithoutStudentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentCreateInput> = z
  .object({
    id: z.string().optional(),
    studentId: z.string(),
    fullName: z.string(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutStudentInputObjectSchema),
  })
  .strict();

export const StudentCreateInputObjectSchema = Schema;
