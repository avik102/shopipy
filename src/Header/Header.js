import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1>SHOPIPY</h1>
                <div>
                    <a href="#">Shoping</a>
                    <a href="#">Orders</a>
                    <a href="#">Inventory</a>
                    <a href="#" > Amount</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;