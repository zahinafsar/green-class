import { z } from 'zod';

export const RoomScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
]);
