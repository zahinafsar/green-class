import { generateAvatar } from '../conversation';

describe('conversation', () => {
  describe('generateAvatar', () => {
    test('should generate a valid robohash URL', () => {
      const name = 'test-user';
      const avatarUrl = generateAvatar(name);

      expect(avatarUrl).toBe(`https://robohash.org/${name}`);
    });

    test('should handle empty string input', () => {
      const avatarUrl = generateAvatar('');
      expect(avatarUrl).toBe('https://robohash.org/');
    });
  });
}); 