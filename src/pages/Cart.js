import { useEffect, useState } from "react";
// import { CartContext } from "./CartContext";

const Cart = () => {
    let num = [1, 2, 3, 4, 5];
    let total = [500, 450, 600, 800, 150, 290, 550];
    
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RohitSharma66/fake-api/master/pizza.json')
        .then(response => response.json())
        .then(data => { 
            setProducts(data);
        });
    }, []);

    return (
        
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
        <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
                {
                products.map(product => {
                    return (
                        <li key={product.id} className="mb-12">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="h-16" src={product.imageUrl} alt="" />
                                    <span className="font-bold ml-4 w-48">{product.name}</span>
                                </div>

                                <div>
                                    <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                                    <b className="px-4">{
                                        num[Math.floor(Math.random()*num.length)]
                                    }</b>
                                    <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                                </div>
                                <span>£{product.price}</span>
                                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
                    )
                })
                }   
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>
                    Grand Total: £ {total[Math.floor(Math.random()*total.length)]}
                </b>
            </div>
            <div className="text-right py-2">
                <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default Cart;
