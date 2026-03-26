import React from 'react';
import useProducts from '../../Components/Hooks/useProducts';
import ShowAllProduct from './ShowAllProduct';

const AllProducts = () => {
    const { error, loading, products } = useProducts()
    console.log(products)
    return (
        <div>
            <h1 className='font-semibold my-3'>All Products: {products.length}</h1>
            <label className="input">
                <span className="label"></span>
                <input type="search" placeholder="Search here" />
            </label>

            <div className='grid grid-cols-1 md:grid-cols-2 pt-2  lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <ShowAllProduct product={product} key={product.id}></ShowAllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;