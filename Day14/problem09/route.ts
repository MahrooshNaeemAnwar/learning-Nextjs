import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }
  
  return NextResponse.json({ 
    message: 'File uploaded',
    name: file.name,
    size: file.size,
    type: file.type,
  });
}