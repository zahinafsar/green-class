import { z } from 'zod';

export const MessageScalarFieldEnumSchema = z.enum([
  'id',
  'content',
  'createdAt',
  'updatedAt',
  'userId',
  'roomId',
]);
