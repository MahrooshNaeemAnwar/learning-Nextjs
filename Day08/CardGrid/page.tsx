export default function CardGrid(){
    const cards=[
        {title:"card 1",content:"content 1",color:"bg-blue-500"},
        {title:"card 2",content:"content 2",color:"bg-green-500"},
        {title:"card 3",content:"content 3",color:"bg-yellow-500"},
        {title:"card 4",content:"content 4",color:"bg-purple-500"},
        {title:"card 5",content:"content 5",color:"bg-red-500"},
        {title:"card 6",content:"content 6",color:"bg-pink-500"},
    ];
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Card Grid</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card,index)=>(
                <div key={index} className={`${card.color} text-white p-6 rounded-lg shadow-md`}>
                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                    <p> {card.content}</p>
                 </div>
                ))}
            </div>
        </div>
    );
}