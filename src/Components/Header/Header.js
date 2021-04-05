import React from 'react';
import {
 
    Link
  } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
               <h2 href="#" className="shop-name">DailyShop BD</h2>
              <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Order</Link>
                    </li>
                    <li>
                        <Link to="/addProduct">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li className="active">
                        <Link to="/login" >Login</Link>
                    </li>
                </ul>
            </nav>
           
        </div>
    );
};

export default Header;