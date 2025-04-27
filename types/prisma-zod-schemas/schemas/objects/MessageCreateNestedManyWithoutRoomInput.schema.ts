import { z } from 'zod';
import { MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema';
import { MessageCreateOrConnectWithoutRoomInputObjectSchema } from './MessageCreateOrConnectWithoutRoomInput.schema';
import { MessageCreateManyRoomInputEnvelopeObjectSchema } from './MessageCreateManyRoomInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutRoomInput> = z
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
    createMany: z
      .lazy(() => MessageCreateManyRoomInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MessageCreateNestedManyWithoutRoomInputObjectSchema = Schema;
