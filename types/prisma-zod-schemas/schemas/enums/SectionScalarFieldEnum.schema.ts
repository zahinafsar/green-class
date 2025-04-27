import { z } from 'zod';

export const SectionScalarFieldEnumSchema = z.enum([
  'id',
  'batch',
  'program',
  'subject',
  'section',
  'courseCode',
  'createdAt',
  'updatedAt',
  'roomId',
]);
