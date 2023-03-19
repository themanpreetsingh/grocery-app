// Author: themanpreetsingh.github.io
import ItemCountComponent from "./ItemCountComponent"
import RemoveIcon from "../icons/RemoveIcon"
import './CartItem.css'


function CartItem({name, img, price, count, available, incrementItem, decrementItem,removeItemFromCart}) {
    const availabilityClass = 'availability' +  ((available >= 10) ? ' green' : ' orange')
    const availabilityInfo = (available >= 10) ? 'Available' : `Only ${available} left`
    
    return (
        <div className="cartItem">
            <img src={img} alt={name} className="cartItemContent"/>
            <h3 className="cartItemName">{name}</h3>
            <div className="cartCountContainer">
                <ItemCountComponent count={count} addToCart={() => incrementItem(name)} removeFromCart={() => decrementItem(name)}/>
                <div className={availabilityClass}>{availabilityInfo}</div>
            </div>
            <p className="cartItemPrice">{price}</p>
            <RemoveIcon className="removeIcon" onClick={() => removeItemFromCart(name)}/>
        </div>
    )
}

export default CartItem
