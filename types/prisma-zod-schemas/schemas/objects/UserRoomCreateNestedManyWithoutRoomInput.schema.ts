import { z } from 'zod';
import { UserRoomCreateWithoutRoomInputObjectSchema } from './UserRoomCreateWithoutRoomInput.schema';
import { UserRoomUncheckedCreateWithoutRoomInputObjectSchema } from './UserRoomUncheckedCreateWithoutRoomInput.schema';
import { UserRoomCreateOrConnectWithoutRoomInputObjectSchema } from './UserRoomCreateOrConnectWithoutRoomInput.schema';
import { UserRoomCreateManyRoomInputEnvelopeObjectSchema } from './UserRoomCreateManyRoomInputEnvelope.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomCreateNestedManyWithoutRoomInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserRoomCreateWithoutRoomInputObjectSchema),
        z.lazy(() => UserRoomCreateWithoutRoomInputObjectSchema).array(),
        z.lazy(() => UserRoomUncheckedCreateWithoutRoomInputObjectSchema),
        z
          .lazy(() => UserRoomUncheckedCreateWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserRoomCreateOrConnectWithoutRoomInputObjectSchema),
        z
          .lazy(() => UserRoomCreateOrConnectWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UserRoomCreateManyRoomInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoomWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserRoomCreateNestedManyWithoutRoomInputObjectSchema = Schema;
