import { submitContact, subscribeNewsletter } from './actions';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form action={submitContact} className="space-y-4 max-w-md">
          <input type="text" name="name" placeholder="Name" className="w-full border rounded-lg px-4 py-2" required />
          <input type="email" name="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" required />
          <textarea name="message" placeholder="Message" rows={4} className="w-full border rounded-lg px-4 py-2" required />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Send</button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
        <form action={subscribeNewsletter} className="flex gap-2 max-w-md">
          <input type="email" name="email" placeholder="Email" className="flex-1 border rounded-lg px-4 py-2" required />
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
