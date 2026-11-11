async function ProductList(){
    const res=fetch('https:/fakestoreapi.com/products',{
        next:{revalidate:60}
    });
    const products=await res.json()

    return(
        <div className="grid grid-cols-4 gap-4">
        {products.map((product:any)=>(
            <div key={product.id} className="bg-white p-4 rounded shadow">
                <img src={product.image} alt={product.title} className="h-32 object-contain mb-2"/>
                <h3 className="text-sm font-bold">{product.title}</h3>
                <p className="text-green-500">${product.price}</p>
            </div>
        ))}
        </div>
    );
}
export default function ProductsPage(){
    return(
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Products (ISR:60s)</h1>
            <ProductList/>
        </div>
    );
}