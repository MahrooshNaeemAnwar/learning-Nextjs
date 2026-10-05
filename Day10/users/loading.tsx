export default function loading(){
    return(
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[1,2,3,4,5,6,7].map((i)=>(
                <div key={i} className="bg-gray-800 h-32  rounded-lg animate-pulse"></div>
           ))}   
            </div>
        </div>
    );
}