import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Mainpage from './components/mainpage';
import Cart from "./components/Cart";
import { CartProvider  } from "react-use-cart";

//import ShoppingCart from './components/shopping-cart';

function App() {
  return (
    <React.Fragment>
       <CartProvider>
         <Mainpage/> 
         <Cart/>
        </CartProvider>

    </React.Fragment>    
  );
}

export default App;