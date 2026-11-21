import { prisma } from '@/lib/prisma';
import { createPost } from '../actions';

export default async function CreatePostPage() {
  const users = await prisma.user.findMany();
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      <form action={createPost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input type="text" name="title" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea name="content" rows={4} className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <select name="authorId" className="w-full border rounded-lg px-4 py-2" required>
            <option value="">Select author</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Create Post</button>
      </form>
    </div>
  );
}
