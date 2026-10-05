export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id} className="mb-2">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}