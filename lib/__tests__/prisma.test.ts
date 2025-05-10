import { prisma } from '../prisma';

describe('prisma', () => {
  it('should create a Prisma client instance', () => {
    expect(prisma).toBeDefined();
    expect(typeof prisma).toBe('object');
  });

  it('should have user model', () => {
    expect(prisma.user).toBeDefined();
    expect(typeof prisma.user).toBe('object');
  });
}); 