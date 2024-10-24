
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import About from '../About/About';
import { useState } from 'react';
// import { useState } from 'react';

const CartContainer = ({ handleToggle, isActive,cart,handleDelete }) => {
//    console.log(cart)
    const [button,setButton]=useState(true)
       const handleButton = () => {
       
          setButton(!button);
        
    }
    return (
        <>
         <div>
          
           <div className="m-4 ">
                    <div>
                        <div className={button?'btn btn-info':'btn'} onClick={handleButton}>you</div>
                        <div className={button?'btn ':'btn btn-info'} onClick={handleButton}>me</div>
                    </div> <br />

            <button onClick={()=>handleToggle('cart')} className={`mr-4 ${isActive.cart?"btn btn-accent mr-4":'btn'}`}>Cart</button>
            <button onClick={() => handleToggle('About')} className={`${isActive.cart ? "btn " : 'btn btn-accent'}`}>About</button>
            {
                isActive.cart?<Cart isActive={isActive} cart={cart} handleDelete={handleDelete}></Cart>:<About></About>
            }

                    
        </div>
              
        </div>
        
        </>
    );
};

CartContainer.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired
};

export default CartContainer;