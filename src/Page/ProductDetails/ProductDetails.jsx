import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../../Components/Hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams()
    const {products} = useProducts()
    console.log( products)
    const product = products.find(p => p.id == id)
    const {name, price, category, image, description} = product || {}
    const handleAddToWishList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishList'))
        let updatedList = []
        if(existingList){
            const isDuplicate = existingList.some(p => p.id == product.id)
            if(isDuplicate) return alert('already added')
            updatedList = [...existingList, product]
        }else{
            updatedList.push(product)
        }
        localStorage.setItem('wishList', JSON.stringify(updatedList))
    }
    return (
        <div className="card bg-base-100 border shadow-sm">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p>{description}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <Link onClick={()=> handleAddToWishList()} to={`/wishList/${id}`} className='btn btn-primary'>Add to WishList</Link>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;