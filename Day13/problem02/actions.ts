'use server';

let todos = [
  { id: 1, text: 'Learn Next.js', completed: false },
  { id: 2, text: 'Build a project', completed: false },
];

export async function addTodo(formData: FormData) {
  const text = formData.get('text') as string;
  if (text) {
    todos.push({ id: Date.now(), text, completed: false });
  }
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get('id'));
  todos = todos.filter(t => t.id !== id);
}

export async function toggleTodo(formData: FormData) {
  const id = Number(formData.get('id'));
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
}

export async function getTodos() {
  return todos;
}
