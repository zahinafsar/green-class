import { z } from 'zod';
import { MessageCreateWithoutUserInputObjectSchema } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputObjectSchema } from './MessageUncheckedCreateWithoutUserInput.schema';
import { MessageCreateOrConnectWithoutUserInputObjectSchema } from './MessageCreateOrConnectWithoutUserInput.schema';
import { MessageCreateManyUserInputEnvelopeObjectSchema } from './MessageCreateManyUserInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutUserInputObjectSchema),
          z.lazy(() => MessageCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MessageCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
