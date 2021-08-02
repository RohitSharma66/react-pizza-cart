import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Products from '../components/Products';

const SingleProduct = () => {
    // const [product, setProduct] = useState([]);
    // const params = useParams();
    const history = useHistory();


    return (
        <div className="container mx-auto mt-12">
            <Link to="/"><button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-green-500 mb-12 font-bold " onClick={ ()=>{history.goBack()} }>Back</button></Link>
            <div className="flex">
                <img style={{height:400, width:350}} src="/images/pizza2.jpeg" alt="pizza" />
                <div className="px-9">
                    <h1 className="text-xl font-bold">Havana Pizza</h1>
                    <div className="text-md">small</div>
                    <div className="font-bold mt-2">£20</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>

            </div>
                
        </div>
    )
}

export default SingleProduct;
