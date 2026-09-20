import Image from "next/image";

export default function Home(){
  return (
     <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-500 mb-4">Inter Font</h1>
      <p className="text-xl ">
        ye text Inter font h jo next/font se load hua h .
      </p>
      <p className="text-lg font-bold">
      bold font bhi Inter font  m h .
      </p>
    <h1 className="text-3xl font-bold text-gray-600 mb-8">Responsive Images</h1>
    {/*Basic Image Practice*/}
    <div className=" bg-white p-8">
      <h1 className="text-xl  text-gray-700 font-bold  mb-4">Basic image</h1>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={500}
        height={100}
        placeholder="blur"
        blurDataURL="/placeholder.png"
        className="border p-4"
        />
    </div>
    {/* hero with fill image*/}
    <div className="relative w-full h-64 md:h-96  mb-8 rounded-lg overflow-hidden">
      <Image
      src="/vercel.svg"
      alt="Hero background"
      fill
      className="object-contain"
      sizes="(max-width:486px)10vw,50vw"
      />
    </div>
    

   </div>
);

}
