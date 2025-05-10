import { cn } from '../utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('base-class', 'additional-class');
      expect(result).toBe('base-class additional-class');
    });

    it('should handle conditional classes', () => {
      const result = cn('base-class', { 'conditional-class': true, 'not-included': false });
      expect(result).toBe('base-class conditional-class');
    });

    it('should handle Tailwind classes correctly', () => {
      const result = cn('p-4 bg-red-500', 'p-4 bg-blue-500');
      expect(result).toBe('p-4 bg-blue-500');
    });

    it('should handle empty inputs', () => {
      const result = cn();
      expect(result).toBe('');
    });
  });
}); 