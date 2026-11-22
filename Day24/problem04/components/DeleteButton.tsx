"use client";

export default function DeleteButton({ id, onDelete }: { id: string; onDelete: (id: string) => void }) {
  return (
    <button
      onClick={() => {
        if (confirm('Are you sure you want to delete this user?')) {
          onDelete(id);
        }
      }}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  );
}
