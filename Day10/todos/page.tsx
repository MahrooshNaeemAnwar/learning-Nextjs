import { Suspense } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function TodoList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();

  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {todos.slice(0, 15).map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            readOnly
            className="w-5 h-5"
          />
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TodosPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Todos</h1>
      <Suspense
        fallback={
          <div className="max-w-2xl mx-auto space-y-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-16 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <TodoList />
      </Suspense>
    </div>
  );
}
