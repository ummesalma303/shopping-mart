import PropTypes from 'prop-types';
// // {
//     "id": "001",
//     "name": "Quantum Laptop Pro",
//     "description": "A high-performance laptop with a sleek design, featuring the latest Intel i9 processor, 32GB RAM, and a 1TB SSD.",
//     "price": "$1,999.99",
//     "category": "Electronics",
//     "isFeatured": true,
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcofB3ENTQC3W-cuO8SMeToPO3zY4ZICxbyWYGLtDCRuQygUa4uuzMW8xX0kG3oDC0tI&usqp=CAU"
// }
const Cart = ({ cart,handleDelete }) => {
    // console.log(cart)
    // const []=cart
    return (
        <div>
            {
                cart.map((product) => (
                    <div key={product.id} className='flex items-center space-x-3'>
                        <img className='w-12 my-4' src={product.image} alt="" />
                        <h2>{product.name}</h2>
                        <button onClick={()=>handleDelete(product.id)} className='btn'>delete</button>
                    </div>
                )
                )
            } 
           
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired
};
export default Cart;