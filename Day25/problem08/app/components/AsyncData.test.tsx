import { render, screen, waitFor } from '@testing-library/react';
import AsyncData from './AsyncData';

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
