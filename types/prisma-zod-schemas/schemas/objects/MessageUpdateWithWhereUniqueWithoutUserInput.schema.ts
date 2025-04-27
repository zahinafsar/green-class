import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutUserInputObjectSchema } from './MessageUpdateWithoutUserInput.schema';
import { MessageUncheckedUpdateWithoutUserInputObjectSchema } from './MessageUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MessageUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
