"use client";
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
