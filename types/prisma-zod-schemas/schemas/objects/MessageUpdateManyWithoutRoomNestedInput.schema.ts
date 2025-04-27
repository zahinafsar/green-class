import { z } from 'zod';
import { MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema';
import { MessageCreateOrConnectWithoutRoomInputObjectSchema } from './MessageCreateOrConnectWithoutRoomInput.schema';
import { MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutRoomInput.schema';
import { MessageCreateManyRoomInputEnvelopeObjectSchema } from './MessageCreateManyRoomInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutRoomInput.schema';
import { MessageUpdateManyWithWhereWithoutRoomInputObjectSchema } from './MessageUpdateManyWithWhereWithoutRoomInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutRoomNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MessageCreateWithoutRoomInputObjectSchema),
        z.lazy(() => MessageCreateWithoutRoomInputObjectSchema).array(),
        z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema),
        z
          .lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MessageCreateOrConnectWithoutRoomInputObjectSchema),
        z
          .lazy(() => MessageCreateOrConnectWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema),
        z
          .lazy(() => MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MessageCreateManyRoomInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema),
        z
          .lazy(() => MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MessageUpdateManyWithWhereWithoutRoomInputObjectSchema),
        z
          .lazy(() => MessageUpdateManyWithWhereWithoutRoomInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MessageScalarWhereInputObjectSchema),
        z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MessageUpdateManyWithoutRoomNestedInputObjectSchema = Schema;
