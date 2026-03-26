import React from 'react';
import { Link} from 'react-router';
import Product from '../Product/Product';
import useProducts from '../../Components/Hooks/useProducts';

const Home = () => {
    const {products,error,loading} = useProducts()
    const featuredProducts = products.slice(0,6)
    // console.log(products)
    return (
        <div>
            <h1 className='text-5xl'>FeaturedProducts: {products.length}</h1>
            <Link className='btn btn-outline ' to={`/allProducts`}>See All </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-2  lg:grid-cols-3 gap-5'>
            {
                featuredProducts.map(product => <Product key={product.id} product={product}></Product>)
            }
            
        </div>
        </div>
    );
};

export default Home;