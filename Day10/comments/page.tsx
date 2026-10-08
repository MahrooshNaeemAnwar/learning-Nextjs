import { Suspense } from 'react';

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

async function CommentList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments: Comment[] = await res.json();

  return (
    <div className="space-y-4">
      {comments.slice(0, 10).map((comment) => (
        <div key={comment.id} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {comment.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-bold">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.email}</p>
            </div>
          </div>
          <p className="text-gray-700">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function CommentsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Comments</h1>
      <Suspense
        fallback={
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-32 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <CommentList />
      </Suspense>
    </div>
  );
}
