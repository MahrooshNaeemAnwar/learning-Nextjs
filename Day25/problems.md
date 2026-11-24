# Day 25: Practice Problems

## 🎯 Instructions
Testing practice karo. Unit, component, aur integration tests likho.

---

## Problem 1: Jest Setup
**Jest setup karo:**

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

✅ **Check:** Jest run ho raha hai?

---

## Problem 2: Utility Function Test
**Utility function test karo:**

```tsx
// lib/utils.ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}

// lib/utils.test.ts
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
```

✅ **Check:** Tests pass ho rahe hain?

---

## Problem 3: Button Component Test
**Button component test karo:**

```tsx
// app/components/Button.tsx
"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const className = variant === 'primary' 
    ? 'bg-blue-500 text-white px-4 py-2 rounded' 
    : 'bg-gray-200 text-gray-800 px-4 py-2 rounded';
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// app/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('applies primary variant by default', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('bg-blue-500');
  });
  
  it('applies secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-200');
  });
});
```

✅ **Check:** Button tests pass ho rahe hain?

---

## Problem 4: Card Component Test
**Card component test karo:**

```tsx
// app/components/Card.tsx
interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// app/components/Card.test.tsx
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders title', () => {
    render(<Card title="Test Title" description="Test desc" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
  
  it('renders description', () => {
    render(<Card title="Title" description="Description here" />);
    expect(screen.getByText('Description here')).toBeInTheDocument();
  });
});
```

✅ **Check:** Card tests pass ho rahe hain?

---

## Problem 5: Form Component Test
**Form component test karo:**

```tsx
// app/components/ContactForm.tsx
"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  if (submitted) {
    return <div data-testid="success">Thank you for your message!</div>;
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit">Send</button>
    </form>
  );
}

// app/components/ContactForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('shows form initially', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });
  
  it('shows success after submit', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Mahroosh' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@test.com' } });
    fireEvent.click(screen.getByText('Send'));
    expect(screen.getByTestId('success')).toBeInTheDocument();
  });
});
```

✅ **Check:** Form test pass ho raha hai?

---

## Problem 6: List Component Test
**List component test karo:**

```tsx
// app/components/UserList.tsx
interface User {
  id: number;
  name: string;
}

export default function UserList({ users }: { users: User[] }) {
  if (users.length === 0) {
    return <div data-testid="empty">No users found</div>;
  }
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// app/components/UserList.test.tsx
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList', () => {
  it('renders empty state', () => {
    render(<UserList users={[]} />);
    expect(screen.getByTestId('empty')).toBeInTheDocument();
  });
  
  it('renders users', () => {
    const users = [{ id: 1, name: 'Mahroosh' }, { id: 2, name: 'Ali' }];
    render(<UserList users={users} />);
    expect(screen.getByText('Mahroosh')).toBeInTheDocument();
    expect(screen.getByText('Ali')).toBeInTheDocument();
  });
});
```

✅ **Check:** List tests pass ho rahe hain?

---

## Problem 7: Hook Test
**Custom hook test karo:**

```tsx
// hooks/useCounter.ts
import { useState } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// hooks/useCounter.test.ts
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  
  it('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });
  
  it('increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  
  it('decrements', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
  
  it('resets', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.count).toBe(5);
  });
});
```

✅ **Check:** Hook tests pass ho rahe hain?

---

## Problem 8: Async Component Test
**Async component test karo:**

```tsx
// app/components/AsyncData.tsx
"use client";
import { useEffect, useState } from 'react';

export default function AsyncData() {
  const [data, setData] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(post => setData(post.title));
  }, []);
  
  if (!data) return <div data-testid="loading">Loading...</div>;
  
  return <div data-testid="data">{data}</div>;
}

// app/components/AsyncData.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import AsyncData from './AsyncData';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Test Post' }),
  })
) as jest.Mock;

describe('AsyncData', () => {
  it('shows loading initially', () => {
    render(<AsyncData />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
  
  it('shows data after fetch', async () => {
    render(<AsyncData />);
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent('Test Post');
    });
  });
});
```

✅ **Check:** Async test pass ho raha hai?

---

## Problem 9: Snapshot Test
**Snapshot test karo:**

```tsx
// app/components/Profile.tsx
interface ProfileProps {
  name: string;
  email: string;
}

export default function Profile({ name, email }: ProfileProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// app/components/Profile.test.tsx
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  it('matches snapshot', () => {
    const { container } = render(<Profile name="Mahroosh" email="test@test.com" />);
    expect(container).toMatchSnapshot();
  });
});
```

✅ **Check:** Snapshot test pass ho raha hai?

---

## Problem 10: Complete Test Suite
**Complete test suite banao:**

```tsx
// lib/calculator.ts
export function add(a: number, b: number): number { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
export function multiply(a: number, b: number): number { return a * b; }
export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

// lib/calculator.test.ts
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
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
});
```

✅ **Check:** Sab tests pass ho rahe hain?

---

## ✅ Checklist
- [ ] Problem 1: Jest setup
- [ ] Problem 2: Utility function test
- [ ] Problem 3: Button component test
- [ ] Problem 4: Card component test
- [ ] Problem 5: Form component test
- [ ] Problem 6: List component test
- [ ] Problem 7: Hook test
- [ ] Problem 8: Async component test
- [ ] Problem 9: Snapshot test
- [ ] Problem 10: Complete test suite
