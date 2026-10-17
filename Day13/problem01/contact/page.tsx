import { submitContact } from '../actions';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form action={submitContact} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" rows={4} className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
