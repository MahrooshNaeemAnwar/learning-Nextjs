import Image from "next/image";
const images=[
    {src:"/next.svg",alt:"Image 1",width:400, height:300},
    {src:"/vercel.svg",alt:"Image 2",width:400 ,height:300},
    {src:"/file.svg",alt:"Image 3",width:400,height:300},
];

 export default function Gallery(){
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-gray-500 mb-8">Gallery Images</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((image,index)=>
                <div key={index} className="bg-white rounded-lg shadow:md  text-gray-700 overflow-hidden">
                    <div className="relative h-64">
                        <Image
                        src ={image.src}
                        alt={image.alt}
                        fill 
                        className="object-contain p-4"
                        />
                    </div>
                    <div className="p-4">
                        <p className="font-bold">{image.alt}</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
 }