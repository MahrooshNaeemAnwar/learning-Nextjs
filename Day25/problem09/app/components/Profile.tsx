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
