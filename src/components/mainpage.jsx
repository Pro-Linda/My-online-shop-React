import React from 'react';
import Navbar from './navbar';
import Product from './product';
import Info from "../Info";
import "bootstrap/dist/css/bootstrap.min.css";

const Mainpage = () => { 


  return (
    <React.Fragment>
        <Navbar/>
      <section className="py-4 container">  
      <div className="row justify-content-center">

        <h2 className="Producttitle" id='Vegetables'> Vegetables</h2>
        {Info.productInfo1.map((item, index) => { 
            return(
               <Product 
               image={item.image} 
               title={item.title}
                price={item.price}
                description={item.description}
                item={item}
                key={index}/>
            )
        })}

        <h2 className="Producttitle" id='Fruits'> Fruits</h2>
        {Info.productInfo2.map((item, index) => { 
            return(
               <Product 
               image={item.image} 
               title={item.title} 
               price={item.price} 
               description={item.description}
               item={item}
               key={index}/>
            )
        })}
       
        <h2 className="Producttitle" id='Backery'>Backery</h2>
        {Info.productInfo3.map((item, index) => { 
            return(
               <Product 
               image={item.image} 
               title={item.title} 
               price={item.price} 
               description={item.description}
               item={item}
               key={index}/>
            )
        })}

        </div> 
        </section>
    </React.Fragment>
  );
}
 
export default Mainpage;