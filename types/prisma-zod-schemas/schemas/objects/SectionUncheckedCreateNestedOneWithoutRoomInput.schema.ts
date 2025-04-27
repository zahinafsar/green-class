import { z } from 'zod';
import { SectionCreateWithoutRoomInputObjectSchema } from './SectionCreateWithoutRoomInput.schema';
import { SectionUncheckedCreateWithoutRoomInputObjectSchema } from './SectionUncheckedCreateWithoutRoomInput.schema';
import { SectionCreateOrConnectWithoutRoomInputObjectSchema } from './SectionCreateOrConnectWithoutRoomInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUncheckedCreateNestedOneWithoutRoomInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SectionCreateWithoutRoomInputObjectSchema),
          z.lazy(() => SectionUncheckedCreateWithoutRoomInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SectionCreateOrConnectWithoutRoomInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SectionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SectionUncheckedCreateNestedOneWithoutRoomInputObjectSchema =
  Schema;
