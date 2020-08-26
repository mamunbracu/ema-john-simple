import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = (total + product.price);
       
    }
    const tax = (total/10).toFixed(2);
    
    let shipping = 0;
    
    if(total>0){
        shipping = 12.99
    }
    else if(total>35){
        shipping = 4.99;
    }
    else if(total>100){
        shipping = 2;
    }

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h3>order Summery</h3>
            <h5>Items ordered: {cart.length}</h5>
            <p>Items price : ${total.toFixed(2)}</p>
            <p>Shipping & Handling : ${shipping}</p>
            <p>Total Before Tax: ${total.toFixed(2)}</p>
            <p>Estimated tax :${tax}</p>
            <h2 className="order-total">Order Total: ${grandTotal}</h2>
            <button className="review-btn">Review Your Order</button>
        </div>
    );
};

export default Cart;