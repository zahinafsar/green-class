const mockUser = { id: '123', email: 'test@example.com' };

import { auth } from '../auth';

jest.mock('next/headers', () => ({
  cookies: jest.fn().mockReturnValue({
    get: jest.fn()
  })
}));

jest.mock('../jwt', () => ({
  verifyToken: jest.fn().mockResolvedValue(mockUser)
}));

describe('auth', () => {
  test('should return decoded token when valid', async () => {
    const result = await auth();
    expect(result).toEqual(mockUser);
  });
}); 