import { NextRequest, NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'electronics' },
  { id: 3, name: 'Shirt', price: 49, category: 'clothing' },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const maxPrice = searchParams.get('maxPrice');
  
  let filtered = products;
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= Number(maxPrice));
  }
    return NextResponse.json(filtered);
}