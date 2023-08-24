import React from 'react';
import {useCart} from "react-use-cart"

const Product = (props) => {
  const {addItem} = useCart();
  return (
    <div className="card cole-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card-img-top p-0 overflow-hidden h-100 shadow" >
        <img src={props.image} alt='' className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-price">{props.price}€</h5>
            <p className="card-text">{props.description}</p>
            <button className="btn btn-primary" onClick={() =>{
            return addItem(props.item);
          }}>Add to Cart</button>
          </div>
      </div>
    </div>
  );

};

 
export default Product;