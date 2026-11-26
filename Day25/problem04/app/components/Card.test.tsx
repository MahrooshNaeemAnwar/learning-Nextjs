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