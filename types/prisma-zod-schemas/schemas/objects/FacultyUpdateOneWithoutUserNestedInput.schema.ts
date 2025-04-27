import { z } from 'zod';
import { FacultyCreateWithoutUserInputObjectSchema } from './FacultyCreateWithoutUserInput.schema';
import { FacultyUncheckedCreateWithoutUserInputObjectSchema } from './FacultyUncheckedCreateWithoutUserInput.schema';
import { FacultyCreateOrConnectWithoutUserInputObjectSchema } from './FacultyCreateOrConnectWithoutUserInput.schema';
import { FacultyUpsertWithoutUserInputObjectSchema } from './FacultyUpsertWithoutUserInput.schema';
import { FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyUpdateWithoutUserInputObjectSchema } from './FacultyUpdateWithoutUserInput.schema';
import { FacultyUncheckedUpdateWithoutUserInputObjectSchema } from './FacultyUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FacultyUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FacultyCreateWithoutUserInputObjectSchema),
        z.lazy(() => FacultyUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FacultyCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => FacultyUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => FacultyWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => FacultyUpdateWithoutUserInputObjectSchema),
        z.lazy(() => FacultyUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const FacultyUpdateOneWithoutUserNestedInputObjectSchema = Schema;
