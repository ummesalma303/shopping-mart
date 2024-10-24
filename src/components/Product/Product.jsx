import PropTypes from 'prop-types';
const Product = ({ product, handleProduct }) => {
    // console.log(handleProduct)
    const {category,isFeatured,image,description,name,price}=product
    return (
        <div className='my-10 space-y-2'>
            <img className="w-[700px]" src={image} alt="" />
            <h2 className='text-xl font-semibold'>Product Name: {name}</h2>
            <h2 className='text-lg '>Price: {price}</h2>
            <h3>Category: { category}</h3>
            <p>Description: {description}</p>
            <p>Feature: { isFeatured?'Category':'N/A'}</p>
            <button className='btn btn-accent text-white' onClick={()=>handleProduct(product)} >Add To Cart</button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleProduct:PropTypes.func.isRequired
};

export default Product;