import React from 'react'
import AddToWishlistIcon from '../icons/AddToWishlistIcon'
import './WishListCard.css'

function WishListCard({name, description, img, price, available, countMap, addToWishlist}) {
    return (
        <div className='wishlistCard'>
            <img src={img} alt={name}></img>
            <div className="wishlistInfo">
                <h3>{name}</h3>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="priceAndIcons">
                    <span>{price}</span> 
                    <AddToWishlistIcon className="icon" onClick={() => addToWishlist(name)}/>
                </div>
            </div>
        </div>
    )
}

export default WishListCard
