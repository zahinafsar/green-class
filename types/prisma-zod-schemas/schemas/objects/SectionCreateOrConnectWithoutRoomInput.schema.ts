import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionCreateWithoutRoomInputObjectSchema } from './SectionCreateWithoutRoomInput.schema';
import { SectionUncheckedCreateWithoutRoomInputObjectSchema } from './SectionUncheckedCreateWithoutRoomInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateOrConnectWithoutRoomInput> = z
  .object({
    where: z.lazy(() => SectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SectionCreateWithoutRoomInputObjectSchema),
      z.lazy(() => SectionUncheckedCreateWithoutRoomInputObjectSchema),
    ]),
  })
  .strict();

export const SectionCreateOrConnectWithoutRoomInputObjectSchema = Schema;
