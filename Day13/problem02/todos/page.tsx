import { addTodo, deleteTodo, toggleTodo, getTodos } from '../actions';

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      
      <form action={addTodo} className="flex gap-2 mb-6">
        <input type="text" name="text" placeholder="Add todo..." className="flex-1 border rounded-lg px-4 py-2" required />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Add</button>
      </form>
      
      <div className="space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow">
            <form action={toggleTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit" className="text-2xl">{todo.completed ? '✅' : '⬜'}</button>
            </form>
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit" className="text-red-500 hover:text-red-700">🗑️</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
