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
