import { Suspense } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number };
};

async function ProductList() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.slice(0, 8).map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain mb-4 w-full"
          />
          <h3 className="font-bold text-sm mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">
              ${product.price}
            </span>
            <span className="text-sm text-yellow-500">
              ⭐ {product.rating.rate}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-64 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <ProductList />
      </Suspense>
    </div>
  );
}
