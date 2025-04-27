import { z } from 'zod';
import { UserRoomCreateWithoutRoomInputObjectSchema } from './UserRoomCreateWithoutRoomInput.schema';
import { UserRoomUncheckedCreateWithoutRoomInputObjectSchema } from './UserRoomUncheckedCreateWithoutRoomInput.schema';
import { UserRoomCreateOrConnectWithoutRoomInputObjectSchema } from './UserRoomCreateOrConnectWithoutRoomInput.schema';
import { UserRoomUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './UserRoomUpsertWithWhereUniqueWithoutRoomInput.schema';
import { UserRoomCreateManyRoomInputEnvelopeObjectSchema } from './UserRoomCreateManyRoomInputEnvelope.schema';
import { UserRoomWhereUniqueInputObjectSchema } from './UserRoomWhereUniqueInput.schema';
import { UserRoomUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './UserRoomUpdateWithWhereUniqueWithoutRoomInput.schema';
import { UserRoomUpdateManyWithWhereWithoutRoomInputObjectSchema } from './UserRoomUpdateManyWithWhereWithoutRoomInput.schema';
import { UserRoomScalarWhereInputObjectSchema } from './UserRoomScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoomUpdateManyWithoutRoomNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => UserRoomUpsertWithWhereUniqueWithoutRoomInputObjectSchema),
        z
          .lazy(() => UserRoomUpsertWithWhereUniqueWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UserRoomCreateManyRoomInputEnvelopeObjectSchema)
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
        z.lazy(() => UserRoomUpdateWithWhereUniqueWithoutRoomInputObjectSchema),
        z
          .lazy(() => UserRoomUpdateWithWhereUniqueWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserRoomUpdateManyWithWhereWithoutRoomInputObjectSchema),
        z
          .lazy(() => UserRoomUpdateManyWithWhereWithoutRoomInputObjectSchema)
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

export const UserRoomUpdateManyWithoutRoomNestedInputObjectSchema = Schema;
