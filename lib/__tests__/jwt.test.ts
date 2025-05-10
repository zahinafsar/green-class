import { generateToken, verifyToken } from '../jwt';
import { SignJWT, jwtVerify } from 'jose';

jest.mock('jose', () => ({
  SignJWT: jest.fn().mockImplementation(() => ({
    setProtectedHeader: jest.fn().mockReturnThis(),
    setExpirationTime: jest.fn().mockReturnThis(),
    setIssuedAt: jest.fn().mockReturnThis(),
    setNotBefore: jest.fn().mockReturnThis(),
    sign: jest.fn().mockResolvedValue('mocked.jwt.token'),
  })),
  jwtVerify: jest.fn(),
}));

describe('JWT Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateToken', () => {
    it('should generate a JWT token with correct payload', async () => {
      const payload = { id: 1, email: 'test@example.com' };
      const token = await generateToken(payload);

      expect(SignJWT).toHaveBeenCalledWith(payload);
      expect(token).toBe('mocked.jwt.token');
    });

    it('should set correct JWT headers and claims', async () => {
      const payload = { id: 1 };
      await generateToken(payload);

      const mockSignJWT = (SignJWT as jest.Mock).mock.results[0].value;
      expect(mockSignJWT.setProtectedHeader).toHaveBeenCalledWith({ alg: 'HS256', typ: 'JWT' });
      expect(mockSignJWT.setExpirationTime).toHaveBeenCalled();
      expect(mockSignJWT.setIssuedAt).toHaveBeenCalled();
      expect(mockSignJWT.setNotBefore).toHaveBeenCalled();
    });
  });

  describe('verifyToken', () => {
    it('should return null when no token is provided', async () => {
      const result = await verifyToken();
      expect(result).toBeNull();
    });

    it('should successfully verify a valid token', async () => {
      const mockUser = { id: 1, email: 'test@example.com' };
      (jwtVerify as jest.Mock).mockResolvedValueOnce({ payload: mockUser });

      const result = await verifyToken('valid.token');
      expect(result).toEqual(mockUser);
      expect(jwtVerify).toHaveBeenCalledWith(
        'valid.token',
        expect.any(Uint8Array)
      );
    });

    it('should return null when token verification fails', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      (jwtVerify as jest.Mock).mockRejectedValueOnce(new Error('Invalid token'));

      const result = await verifyToken('invalid.token');
      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Error verifying token', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });
});
