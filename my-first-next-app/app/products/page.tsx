import Link from "next/link";

const products = [
  { id: "1", name: "Laptop", price: 999, image: "💻" },
  { id: "2", name: "Phone", price: 699, image: "📱" },
  { id: "3", name: "Tablet", price: 499, image: "📟" },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{product.image}</div>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-2xl text-green-600 font-bold">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
