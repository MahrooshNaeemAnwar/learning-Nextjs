export default function AllServerPage() {
  const posts = [
    { id: 1, title: "Next.js Basics", excerpt: "Learn Next.js from scratch" },
    { id: 2, title: "React Hooks", excerpt: "Understanding useState and useEffect" },
    { id: 3, title: "Tailwind CSS", excerpt: "Utility-first CSS framework" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">All Server Page</h1>
      <p className="text-gray-600 mb-8">
        Ye page sirf server components se bana hai. Koi client-side JS nahi hai.
      </p>

      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
