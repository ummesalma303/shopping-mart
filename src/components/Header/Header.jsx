// import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cart,prices }) => {
   
    return (
        <div className="flex justify-around py-4 bg-slate-200">
          <h2 className="text-4xl font-bold">logo</h2>
            <ul className="flex space-x-4 text-lg font-semibold items-center">
                <li>Home</li>
                <li>Product</li>
                <li>Contact</li>

                <li>Cart <span>{cart.length}</span></li>
                <li>Price: $ { prices}</li>
            </ul>
        </div>
    );
};

Header.propTypes = {
    cart: PropTypes.array.isRequired,
    price:PropTypes.number.isRequired
};

export default Header;