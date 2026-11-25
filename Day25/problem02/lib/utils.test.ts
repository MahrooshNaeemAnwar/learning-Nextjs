import { formatCurrency, formatDate } from './utils';

describe('formatCurrency', () => {
  it('formats number as currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });
  
  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });
  
  it('handles negative numbers', () => {
    expect(formatCurrency(-100)).toBe('-$100.00');
  });
});

describe('formatDate', () => {
  it('formats date', () => {
    const date = new Date('2026-01-15');
    expect(formatDate(date)).toContain('1/15/2026');
  });
});
