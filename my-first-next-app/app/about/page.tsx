export default function About() {
  const skills=["JavaScript","Tailwind CSS","Next.js","TypeScript"];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-6">m ek developer hun jo Nextjs seekh rhi hn.  </p>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
          {skills.map((skill,index)=>(
            <li key={index}  className="text-gray-700">{skill}</li>

          ))}
          </ul>
          </div>
  );
}
