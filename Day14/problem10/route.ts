import { NextRequest, NextResponse } from 'next/server';

let items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
];

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = { id: Date.now(), ...body };
  items.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}

// app/api/items/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = items.find(i => i.id === Number(id));
  
  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  return NextResponse.json(item);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  items = items.map(item => 
    item.id === Number(id) ? { ...item, ...body } : item
  );
  
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  items = items.filter(item => item.id !== Number(id));
  return NextResponse.json({ message: 'Deleted' });
}
