export default function FlexWrap(){
    const  tags=["React.js","Tailwind","Next.js","Node.js","postgreSQL","prisma","TypeScript"];
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold  text-gray-800 mb-8">Tech Stack</h1>
            <div className="flex flex-wrap gap-4 ">
                {tags.map((tag,index)=>(
                <div key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                   {tag} </div>
                ))}
            </div>
        </div>
    );
}