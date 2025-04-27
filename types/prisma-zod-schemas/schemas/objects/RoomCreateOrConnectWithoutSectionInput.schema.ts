import { z } from 'zod';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutSectionInputObjectSchema } from './RoomCreateWithoutSectionInput.schema';
import { RoomUncheckedCreateWithoutSectionInputObjectSchema } from './RoomUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutSectionInput> = z
  .object({
    where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoomCreateWithoutSectionInputObjectSchema),
      z.lazy(() => RoomUncheckedCreateWithoutSectionInputObjectSchema),
    ]),
  })
  .strict();

export const RoomCreateOrConnectWithoutSectionInputObjectSchema = Schema;
