import { z } from 'zod';
import { UserRoomCreateWithoutUserInputObjectSchema } from './UserRoomCreateWithoutUserInput.schema';
import { UserRoomUncheckedCreateWithoutUserInputObjectSchema } from './UserRoomUncheckedCreateWithoutUserInput.schema';
import { UserRoomCreateOrConnectWithoutUserInputObjectSchema } from './UserRoomCreateOrConnectWithoutUserInput.schema';
import { UserRoomCreateManyUserInputEnvelopeObjectSchema } from './UserRoomCreateManyUserInputEnvelope.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserRoomCreateWithoutUserInputObjectSchema),
          z.lazy(() => UserRoomCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => UserRoomUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => UserRoomUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserRoomCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => UserRoomCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserRoomCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserRoomUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
