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