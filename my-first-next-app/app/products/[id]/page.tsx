import Link from "next/link";

const products = [
  { id: "1", name: "Laptop", price: 999, description: "Fast laptop with 16GB RAM", image: "💻" },
  { id: "2", name: "Phone", price: 699, description: "Smart phone with great camera", image: "📱" },
  { id: "3", name: "Tablet", price: 499, description: "Portable tablet for work", image: "📟" },
];

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-blue-500 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href="/products"
        className="text-blue-500 hover:underline mb-8 block"
      >
        ← Back to Products
      </Link>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-6xl mb-4">{product.image}</div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-3xl text-green-600 font-bold mb-4">
          ${product.price}
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
