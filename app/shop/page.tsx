interface products {
    id: number;
    title: string;
    price: number;
};

async function Shop(){
    const response = await fetch('http://localhost:8000/products',
    {
        cache: "no-cache"
    })

    const data: products[] = await response.json()

return(
    <div>
        <form className="flex flex-col gap-5  p-8 mx-auto max-w-xl bg-slate-800 rounded-md">
            <input 
                type="text" 
                placeholder="Title" 
                className="p-2 bg-slate-600 outline-none rounded-md"/>
            <input 
                type="text" 
                placeholder="Price" 
                className="p-2 bg-slate-600 outline-none rounded-md"/>

            <button className="p-2 bg-slate-900 text-slate-100 rounded-md">Add Product</button>

        </form>
        <div className="flex flex-wrap justify-center max-w-xl my-10 gap-5 mx-auto">
            {data.map((item) => (
                <div key={item.id} className="p-5 bg-slate-800 rounded-md text-center">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    </div>
)
}
export default Shop;