import { NextRequest, NextResponse } from 'next/server';

let todos = [
  { id: 1, text: 'Learn Next.js', completed: false },
  { id: 2, text: 'Build a project', completed: true },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTodo = { id: Date.now(), text: body.text, completed: false };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  todos = todos.map(todo => 
    todo.id === Number(id) ? { ...todo, ...body } : todo
  );
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  todos = todos.filter(todo => todo.id !== Number(id));
  return NextResponse.json({ message: 'Deleted' });
}
  