import { z } from 'zod';
import { RoomCreateWithoutSectionInputObjectSchema } from './RoomCreateWithoutSectionInput.schema';
import { RoomUncheckedCreateWithoutSectionInputObjectSchema } from './RoomUncheckedCreateWithoutSectionInput.schema';
import { RoomCreateOrConnectWithoutSectionInputObjectSchema } from './RoomCreateOrConnectWithoutSectionInput.schema';
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoomCreateNestedOneWithoutSectionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoomCreateWithoutSectionInputObjectSchema),
        z.lazy(() => RoomUncheckedCreateWithoutSectionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoomCreateOrConnectWithoutSectionInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoomCreateNestedOneWithoutSectionInputObjectSchema = Schema;
