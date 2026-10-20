import { submitFeedback } from '../actions';

export default function FeedbackPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>
      <form action={submitFeedback} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="cursor-pointer">
                <input type="radio" name="rating" value={num} className="hidden" />
                <span className="text-2xl hover:scale-110 transition-transform">⭐</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Feedback</label>
          <textarea name="feedback" rows={4} className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
