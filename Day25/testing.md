# Day 25: Testing

## 📚 Aaj Kya Seekhoge?
- Unit testing
- Component testing
- Integration testing
- Jest setup

---

## 🧪 Jest Setup

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

```tsx
// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

export default config;
```

---

## 📝 Unit Testing

```tsx
// lib/utils.test.ts
import { formatCurrency } from './utils';

describe('formatCurrency', () => {
  it('formats number as currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });
  
  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });
});
```

---

## 🎯 Aaj Ka Summary

| Type | Tool | Use Case |
|------|------|----------|
| Unit | Jest | Functions |
| Component | Testing Library | UI components |
| Integration | Jest + RTL | Full features |

---

## ✅ Next Steps
- Kal hum **Performance** seekhenge
- Aaj ke practice problems solve karo
