import { z } from 'zod';
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const SessionCreateInputObjectSchema = Schema;
