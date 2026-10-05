export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <div className="space-y-4">
                {posts.slice(0,5).map((post:any)=>(
                    <div key={post.id} className="p-4 border rounded shadow">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}