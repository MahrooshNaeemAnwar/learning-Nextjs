import Image from "next/image";

export default function Home(){
  return (
     <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-600 mb-8">Image Practice</h1>
    {/* Basic Image Practice*/}
    <div className="mb-8">
      <h1 className="text-xl font-bold mb-4">Basic image</h1>
      <Image
        src="/Screenshot From 2026-09-04 18-33-29.png"
        alt="Next.js logo"
        width={500}
        height={100}
        className="border p-4"
        />
    </div>
   </div>
);

}
