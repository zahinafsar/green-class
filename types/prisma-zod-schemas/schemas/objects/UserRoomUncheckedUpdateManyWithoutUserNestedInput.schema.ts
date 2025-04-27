import { z } from 'zod';
import { UserRoomCreateWithoutUserInputObjectSchema } from './UserRoomCreateWithoutUserInput.schema';
import { UserRoomUncheckedCreateWithoutUserInputObjectSchema } from './UserRoomUncheckedCreateWithoutUserInput.schema';
import { UserRoomCreateOrConnectWithoutUserInputObjectSchema } from './UserRoomCreateOrConnectWithoutUserInput.schema';
import { UserRoomUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserRoomUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserRoomCreateManyUserInputEnvelopeObjectSchema } from './UserRoomCreateManyUserInputEnvelope.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserRoomUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserRoomUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserRoomUpdateManyWithWhereWithoutUserInput.schema';
import { UserRoomScalarWhereInputObjectSchema } from './UserRoomScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUncheckedUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserRoomUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => UserRoomUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserRoomCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema),
          z.lazy(() => UserRoomWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserRoomUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => UserRoomUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserRoomUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => UserRoomUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserRoomScalarWhereInputObjectSchema),
          z.lazy(() => UserRoomScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserRoomUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
