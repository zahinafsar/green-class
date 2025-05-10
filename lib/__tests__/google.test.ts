import { getAuthUrl, getGoogleOauthToken, createClassroomClient } from '../google';

jest.mock('next/headers', () => ({
  cookies: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue({value: 'test-token'})
  })
}));

describe('google', () => {
  describe('getAuthUrl', () => {
    test('should generate a valid Google OAuth URL', async () => {
      const authUrl = await getAuthUrl();
      expect(authUrl).toBeDefined();
      expect(typeof authUrl).toBe('string');
      expect(authUrl).toMatch(/^https:\/\/accounts\.google\.com\/o\/oauth2\/v2\/auth/);
    });
  });

  describe('getGoogleOauthToken', () => {
    test('should throw error for invalid code', async () => {
      await expect(getGoogleOauthToken('invalid-code')).rejects.toThrow(Error);
    });
  });

  describe('createClassroomClient', () => {
    test('should create a classroom client instance', async () => {
      const client = await createClassroomClient();
      expect(client).toBeDefined();
      expect(typeof client.courses).toBe('object');
    });
  });
}); 