import React from 'react';
import './Review';
const Review = (props) => {
    const {name, quantity} = props.product;
    return (
        <div className="main">
           
            <div className="product-rv">
            <h3 className="product-name">{name}</h3>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-btn">Remove</button>
            </div>
        </div>
    );
};

export default Review;