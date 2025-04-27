import { z } from 'zod';

export const StudentScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'studentId',
  'fullName',
  'image',
  'createdAt',
  'updatedAt',
]);
