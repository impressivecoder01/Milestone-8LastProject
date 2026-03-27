import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Components/Hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams()
    const {products} = useProducts()
    console.log(id, products)
    return (
        <div>
            <p>Details</p>
        </div>
    );
};

export default ProductDetails;