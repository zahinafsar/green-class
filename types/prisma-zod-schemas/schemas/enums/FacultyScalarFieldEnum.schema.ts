import { z } from 'zod';

export const FacultyScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'facultyId',
  'fullName',
  'image',
  'createdAt',
  'updatedAt',
]);
