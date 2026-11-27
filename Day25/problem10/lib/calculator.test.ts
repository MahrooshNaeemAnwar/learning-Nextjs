import { add, subtract, multiply, divide } from './calculator';

describe('Calculator', () => {
  describe('add', () => {
    it('adds two numbers', () => expect(add(2, 3)).toBe(5));
    it('handles negative numbers', () => expect(add(-1, 1)).toBe(0));
  });

  describe('subtract', () => {
    it('subtracts two numbers', () => expect(subtract(5, 3)).toBe(2));
  });

  describe('multiply', () => {
    it('multiplies two numbers', () => expect(multiply(4, 5)).toBe(20));
  });

  describe('divide', () => {
    it('divides two numbers', () => expect(divide(10, 2)).toBe(5));
    it('throws on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('can not divide by zero');
    });
  });
});
