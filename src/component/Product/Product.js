import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img, name, seller, price, stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="single-product">

            <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
            
            <p><small>By: {seller}</small></p>
         
            <p>$ {price}</p>
            <p><small>Only {stock} left in stock</small></p>
            <br/>
           { props.showAddToCart ===true && <button onClick={()=>props.handleProduct(props.product)} className="main-btn"><FontAwesomeIcon icon={faShoppingCart} /> add To cart</button>}

            </div>
          
            
        </div>
    );
};

export default Product;