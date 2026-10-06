export default function ResponsiveGrid(){
    const cards=[1,2,3,4,5,6,7]
    return (
        <div className="bg-gray-800 p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">Responsive Grid Practice</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {cards.map((card)=>(
                    <div key={card} className="bg-white p-4 rounded-lg shadow">
                        <p className=" text-gray-800 text-center">Card {card}</p>
                    </div>
                ))}
            </div>
      </div>
    );
}