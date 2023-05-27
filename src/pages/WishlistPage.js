import React, { useContext } from 'react'
import CartContext from '../CartContext';
import WishListCard from '../components/WishListCard';

function WishlistPage() {
    const {wishlist} = useContext(CartContext);
    return (
        <div>
            {
                wishlist.map((product, index) =>
                    <WishListCard
                        key={index}
                        name={product.name}
                        description={product.description}
                        img={product.img}
                        price={product.price}
                    />  
                )
            }
        </div>
    )
}

export default WishlistPage
