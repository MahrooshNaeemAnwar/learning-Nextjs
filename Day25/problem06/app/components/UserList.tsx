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
