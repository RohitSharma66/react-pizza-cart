import Product from './Product';
import { useState, useEffect} from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RohitSharma66/fake-api/master/pizza.json')
        .then(response => response.json())
        .then(data => { 
            setProducts(data);
        });
    }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                   { 
                       products.map(product => <Product 
                       key={product.name} 
                       id={product.id}
                       product={product} 
                       />   
                    )}             
            </div>
        </div>
    )
}

export default Products;
