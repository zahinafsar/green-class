import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutUserInputObjectSchema } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputObjectSchema } from './MessageUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutUserInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MessageCreateOrConnectWithoutUserInputObjectSchema = Schema;
