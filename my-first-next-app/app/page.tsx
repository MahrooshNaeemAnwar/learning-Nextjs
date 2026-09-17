import Counter from "./components/Counter";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const features = [
    { title: "Fast", icon: "🚀", description: "Lightning fast performance" },
    { title: "Secure", icon: "🔒", description: "Enterprise level security" },
    { title: "Easy", icon: "✨", description: "Simple to use" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Server + Client Components
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Features (Server)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Interactive (Client)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Counter />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
