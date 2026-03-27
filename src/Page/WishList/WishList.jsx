import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const WishList = () => {
    const [wishList, setWishList] = useState([])
    useEffect(()=> {
        const savedList =JSON.parse(localStorage.getItem('wishList'))
        if(savedList)setWishList(savedList)

    }, [])
    return (
        

           
            <div className='space-y-6'>
                <h1>WishList: {wishList.length}</h1>
                {
                    wishList.map(p=> <Product product={p}></Product>)
                }

            </div>

       
    );
};

export default WishList;