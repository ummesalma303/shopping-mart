// import React from 'react';
import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({handleProduct}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl"> total products: { products.length}</h1> 
            {
                products.map(product=><Product key={product.id} product={product} handleProduct={handleProduct}></Product>)
            }
        </div>
    );
};

Products.propTypes = {
    handleProduct:PropTypes.func.isRequired
};

export default Products;