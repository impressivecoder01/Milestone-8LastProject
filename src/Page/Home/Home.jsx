import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Product/Product';

const Home = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
            
        </div>
    );
};

export default Home;