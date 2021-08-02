import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../pages/CartContext';

const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    const addToCart = (product, e) => {
        e.preventDefault();
        let _cart = {...cart };
        if (!_cart.items){
            _cart.items = {}
        }
        if (_cart.items[product.id]) {
            _cart.items[product.id] += 1
        } else {
            _cart.items[product.id] = 1
        }
        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(!true); 
        },2000);
    };

    return (
        <Link to={`/products/${props.id}`}>
            <div style={{height: 280, width: 170}}>
                <img style={{height: 160}} src={props.product.imageUrl} alt="pizza" />
                <div>
                    <div className="text-center">
                        <h2 className="text-lg py-2"  style={{height: 70}}>{props.product.name}</h2>
                        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                    </div>
                    <div className="flex items-center justify-around mt-4">
                        <span className="font-bold">£{props.product.price}</span>
                        <button disabled={isAdding} onClick={(e)=>{addToCart(props.product, e)}} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500' } py-2 px-6 rounded-full font-bold`}>ADD{isAdding ? 'ED' : ''}</button>
                    </div>
                </div>
            </div>
        </Link>           
    )
}

export default Product;
