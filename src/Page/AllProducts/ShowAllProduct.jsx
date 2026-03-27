import React from 'react';
import { Link } from 'react-router';

const ShowAllProduct = ({product}) => {
    const {name, price, category, image} = product

    return (
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/product/sss`} className='btn btn-primary'>View Details</Link>
    </div>
  </div>
</div>  
    );
};

export default ShowAllProduct;