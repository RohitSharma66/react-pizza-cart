import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from './pages/CartContext';
import { useEffect, useState } from "react";

const App = () => {
  const [ cart, setCart ] = useState({});

  useEffect(()=>{
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
    // console.log(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])
  
    return (
      <>  
        <Router>
          <CartContext.Provider value={{ cart, setCart }}>
            <Navigation />
              <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/products" exact component={Products}></Route>
                <Route path="/products/:id" component={SingleProduct}></Route>
                <Route path="/cart" component={Cart}></Route>
              </Switch>
          </CartContext.Provider>  
        </Router>
      </>
    )
}

export default App;
