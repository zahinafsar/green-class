import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutUserInputObjectSchema } from './MessageUpdateWithoutUserInput.schema';
import { MessageUncheckedUpdateWithoutUserInputObjectSchema } from './MessageUncheckedUpdateWithoutUserInput.schema';
import { MessageCreateWithoutUserInputObjectSchema } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputObjectSchema } from './MessageUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MessageUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MessageCreateWithoutUserInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
