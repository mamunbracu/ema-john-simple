import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;
import './Product.css';
const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="single-product">

            <h4 className="product-name">{name}</h4>
            
            <p><small>By: {seller}</small></p>
         
            <p>$ {price}</p>
            <p><small>Only {stock} left in stock</small></p>
            <br/>
            <button onClick={()=>props.handleProduct(props.product)} className="main-btn"><FontAwesomeIcon icon={faShoppingCart} /> add To cart</button>

            </div>
          
            
        </div>
    );
};

export default Product;