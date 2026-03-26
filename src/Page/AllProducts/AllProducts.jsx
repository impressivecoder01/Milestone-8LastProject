import React, { useState } from 'react';
import useProducts from '../../Components/Hooks/useProducts';
import ShowAllProduct from './ShowAllProduct';

const AllProducts = () => {
    const { error, loading, products } = useProducts()
    const [search , setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    console.log(search)
    const searchedProducts = term? products.filter(product => product.name.toLocaleLowerCase().includes(term)) : products
    console.log(searchedProducts)
    return (
        <div>
            <h1 className='font-semibold my-3'>All Products: {searchedProducts.length}</h1>
            <label className="input">
                <span className="label"></span>
                <input value={search} onChange={(e)=> setSearch(e.target.value) } type="search" placeholder="Search here" />
            </label>

            <div className='grid grid-cols-1 md:grid-cols-2 pt-2  lg:grid-cols-3 gap-5'>
                {
                    searchedProducts.map(product => <ShowAllProduct product={product} key={product.id}></ShowAllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;