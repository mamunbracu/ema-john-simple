import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>

           <nav>
               <a href="/shop">Shop</a>
               <a href="/order">Order Review</a>
               <a href="/manage">Manage Inventrory</a>
               <a href="/detailes">Product Details</a>
           </nav> 
        </div>
    );
};

export default Header;