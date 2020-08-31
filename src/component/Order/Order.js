import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Review from '../Review/Review';
import './Order.css';
const Order = () => {


    const [cart, setCart]= useState([]);

    useEffect(() =>{
        const savedCart = getDatabaseCart();

        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key ===key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    },[])

    return (
        <div className="main">
            <h1>This is order Review page </h1>
            { 
            cart.map(pd=><Review product={pd}></Review>)
            }
        </div>
    );
};

export default Order;