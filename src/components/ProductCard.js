// Author: themanpreetsingh.github.io
import './ProductCard.css'
import { useContext,useState, useEffect } from 'react'
import AddToCartIcon from '../icons/AddToCartIcon'
import AddToWishlistIcon from '../icons/AddToWishlistIcon'
import ItemCountComponent from './ItemCountComponent'
import CartContext from '../CartContext'

function ProductCard({name, description, img, price, available, countMap}) {

    //cart contains details about the items in the cart
    const {cart, setCart} = useContext(CartContext);
    //hideCart is used to switch between showing ItemCountComponent & cart icon on product card 
    const [hideCart, setHideCart] = useState(countMap.get(name) > 0);
    const [itemCount, setItemCount] = useState(countMap.get(name));
    const availabilityClass = 'availability' +  ((available >= 10) ? ' green' : ' orange')
    const availabilityInfo = (available >= 10) ? 'Available' : `Only ${available} left`

    //used to add item to the cart when user clicks on cart button or + button
    function addToCart() {
        let updatedCart = [...cart]
        let addedProduct = updatedCart.find(product => product.name === name)
        if(addedProduct === undefined) {
            //adding an item to cart for the first time
            addedProduct = {
                name: name,
                price: price,
                count: 1,
                img: img,
                available: available - 1
            }
            updatedCart.push(addedProduct)
            setHideCart(true)
        } else if(addedProduct.count < available) {
            //incrementing the item count of an item which is already present
            ++addedProduct.count
            --addedProduct.available
        }
        setItemCount(addedProduct.count)
        setCart(updatedCart)
    }

    //used to decrease the count of an item or remove it from cart when count becomes 0
    function removeFromCart() {
        let updatedCart = [...cart]
        let addedProduct = updatedCart.find(product => product.name === name)
        if(addedProduct.count >= 1) {
            --addedProduct.count
            ++addedProduct.available
            if(addedProduct.count === 0) {
                //removing item from cart when count reaches 0
                setHideCart(false)
                updatedCart = updatedCart.filter( product => product.name !== name )
            }
            setItemCount(addedProduct.count)
            setCart(updatedCart)
        } 
        
    }

    useEffect(()=>{
        setHideCart(countMap.get(name) > 0)
        setItemCount(countMap.get(name))
    },[countMap])
    return (
        <div className="productCard">
            <img src={img} alt={name}></img>
            <div className="productInfo">
                <h3>{name}</h3>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="countAndAvailability">
                    <div className={availabilityClass}>{availabilityInfo}</div>
                    <div className="itemCountContainer">
                        <ItemCountComponent count={itemCount} className={hideCart ? "" : "hide"} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    </div>
                </div>
                <div className="priceAndIcons">
                    <span>{price}</span> 
                    <AddToCartIcon className={'icon' + (hideCart ? " hide" : "")} onClick={addToCart}/>
                    <AddToWishlistIcon className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
