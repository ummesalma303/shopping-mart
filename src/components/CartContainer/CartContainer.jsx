
import PropTypes from 'prop-types';
import { useState } from 'react';

const CartContainer = () => {
    const [isActive,setActive]=useState(true)
       const handleToggle = () => {
       
           setActive(true);
        
    }
    
    return (
        <>
         <div>
           <h1 className="text-3xl">hi i am CartContainer.jsx</h1> 
           {/* <div className="m-4 ">
            <button onClick={()=>handleToggle('cart')} className={`mr-4 ${isActive.cart?"btn btn-accent mr-4":'btn'}`}>Cart</button>
            <button onClick={()=>handleToggle('About')} className={`${isActive.cart?"btn ":'btn-accent'}`}>About</button>
        </div> */}
                <div className="m-4 ">
            <button onClick={()=>handleToggle()} className={isActive?"btn bg-blue-400":'btn'}>Cart</button>
            <button onClick={()=>handleToggle()} className="btn">About</button>
        </div>
        </div>
        
        </>
    );
};

CartContainer.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    isActive:PropTypes.object.isRequired
};

export default CartContainer;