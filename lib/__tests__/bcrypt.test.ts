import { hashPassword, comparePassword } from '../bcrypt';

describe('bcrypt', () => {
  const testPassword = 'testPassword123';

  describe('hashPassword', () => {
    test('should hash a password', async () => {
      const hashedPassword = await hashPassword(testPassword);
      expect(hashedPassword).toBeDefined();
      expect(typeof hashedPassword).toBe('string');
      expect(hashedPassword).not.toBe(testPassword);
    });

    test('should generate different hashes for the same password', async () => {
      const hash1 = await hashPassword(testPassword);
      const hash2 = await hashPassword(testPassword);
      expect(hash1).not.toBe(hash2);
    });
  });

  describe('comparePassword', () => {
    test('should return true for matching password and hash', async () => {
      const hashedPassword = await hashPassword(testPassword);
      const result = await comparePassword(testPassword, hashedPassword);
      expect(result).toBe(true);
    });

    test('should return false for non-matching password and hash', async () => {
      const hashedPassword = await hashPassword(testPassword);
      const result = await comparePassword('wrongPassword', hashedPassword);
      expect(result).toBe(false);
    });
  });
}); 