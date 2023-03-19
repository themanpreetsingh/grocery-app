// Author: themanpreetsingh.github.io
import RemoveItemIcon from "../icons/RemoveItemIcon"
import AddItemIcon from "../icons/AddItemIcon"
import './ItemCountComponent.css'

function ItemCountComponent({count, className, addToCart, removeFromCart}) {
    

    return (
        <div className={`${className} itemCountComponent`}>
            <RemoveItemIcon className="icon" onClick={removeFromCart}/>
            <p>{count}</p>
            <AddItemIcon className="icon" onClick={addToCart}/>
        </div>
    )
}

export default ItemCountComponent
