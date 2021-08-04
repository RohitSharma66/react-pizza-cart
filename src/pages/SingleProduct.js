import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CartContext } from "./CartContext";

import { useContext } from 'react';

const SingleProduct = () => {
    const { cart, setCart } = useContext(CartContext);
    const history = useHistory();

    const addFromSinglePage = () => {
        const oldQty = cart.items;
        const _cart = {...cart};
        _cart.items = oldQty + 1 ;
        _cart.totalItems += 1;
        setCart(_cart);
    }

    return (
        <div className="container mx-auto mt-12">
            <Link to="/"><button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-green-500 mb-12 font-bold " onClick={ ()=>{history.goBack()} }>Back</button></Link>
            <div className="flex">
                <img style={{height:400, width:350}} src="/images/pizza2.jpeg" alt="pizza" />
                <div className="px-9">
                    <h1 className="text-xl font-bold">Havana Pizza</h1>
                    <div className="text-md">small</div>
                    <div className="font-bold mt-2">£20</div>
                    <button onClick={addFromSinglePage} className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>     
        </div>
    )
}

export default SingleProduct;
