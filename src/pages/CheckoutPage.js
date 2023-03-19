// Author: themanpreetsingh.github.io
import CartItem from "../components/CartItem"
import { useContext, useState, useEffect } from "react"
import CartContext from "../CartContext"
import "./CheckoutPage.css"

function CheckoutPage() {
    const {cart, setCart, products, appliedDiscounts, setAppliedDiscounts, discount, setDiscount} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    //total price of items in the cart
    function getTotal() {
        let subTotal = 0
        cart.forEach((product) => {subTotal += Number(product.price.slice(1)) * product.count})
        setTotal(subTotal)
    }

    //increase the count of an item in the cart
    function incrementItem(item) {
        let updatedCart = [...cart]
        const addedProduct = updatedCart.find(product => product.name === item)
        if(addedProduct.available > 0) {
            ++addedProduct.count
            --addedProduct.available
            setCart(updatedCart)
        }
    }

    function removeItemFromCart(item) {
        let updatedCart = [...cart]
        updatedCart = updatedCart.filter(product => product.name !== item)
        setCart(updatedCart)
    }

    //decrease the count of an item in the cart
    function decrementItem(item) {
        let updatedCart = [...cart]
        const addedProduct = updatedCart.find(product => product.name === item)
        if(addedProduct.count >= 1) {
            --addedProduct.count
            ++addedProduct.available
            if(addedProduct.count === 0) {
                removeItemFromCart(item)
            } else {
                setCart(updatedCart)
            }
        } 
    }

    //apply any applicable offers
    //TODO: make this generic to accept an array of offers and apply & remove those based on the cart
    function getApplicableOffers() {
        const tempCart = [...cart]
        const cocaCola = tempCart.find(item => item.name === 'Coca-Cola')
        const croissant = tempCart.find(item => item.name === 'Croissants')
        if(!appliedDiscounts.cocaCola && cocaCola !== undefined && cocaCola.count >= 6 ) {
            if(cocaCola.available > 0) {
                ++cocaCola.count;
                --cocaCola.available;
                setCart(tempCart)
            }
            setDiscount(discount + Number(cocaCola.price.slice(1)))
            setAppliedDiscounts({...appliedDiscounts, cocaCola: true})
        } else if(appliedDiscounts.cocaCola && (cocaCola === undefined || cocaCola.count < 6)) {
            removeAppliedOffer('Coca-Cola')
        }

        if(!appliedDiscounts.croissant && croissant !== undefined && croissant.count >= 3) {
            console.log('inside croissant discount')
            const coffee = tempCart.find(item => item.name === 'Coffee')
            if(coffee === undefined) {
                const coffeeProduct = products.find(item => item.name === 'Coffee')
                const addedProduct = {
                    name: 'Coffee',
                    price: coffeeProduct.price,
                    count: 1,
                    img: coffeeProduct.img,
                    available: coffeeProduct.available - 1
                }
                tempCart.push(addedProduct)
                setDiscount(discount + Number(coffeeProduct.price.slice(1)))
            } else if(coffee.available > 0) {
                ++coffee.count;
                setDiscount(discount + Number(coffee.price.slice(1)))
            }
            setCart(tempCart)
            setAppliedDiscounts({...appliedDiscounts, croissant: true})
        } else if(appliedDiscounts.croissant && croissant.count < 3) {
            removeAppliedOffer('Croissants')
        }

    }

    function removeAppliedOffer(offerItem) {
        const tempCart = [...cart]
        if(offerItem === 'Croissants') {
            const coffee = tempCart.find(item => item.name === 'Coffee')
            if(coffee !== undefined) {
                decrementItem('Coffee')
                const coffeeProduct = products.find(item => item.name === 'Coffee')
                setDiscount(discount - Number(coffeeProduct.price.slice(1)))
            }
            setAppliedDiscounts({...appliedDiscounts, croissant: false})
        } else if(offerItem === 'Coca-Cola'){
            const cocaCola = products.find(item => item.name === 'Coca-Cola')
            setDiscount(discount - Number(cocaCola.price.slice(1)))
            setAppliedDiscounts({...appliedDiscounts, cocaCola: false})
        }
    }

    useEffect(() => {
        getApplicableOffers()
        getTotal()
    }, [cart, appliedDiscounts])

  
    return (
        <div>
            <h1>Checkout</h1>
            <div>
                {   
                    cart.map((product, index) => {
                        return (
                        <CartItem 
                        key={index}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                        count={product.count}
                        available={product.available}
                        total={total}
                        setTotal={setTotal}
                        incrementItem={incrementItem}
                        decrementItem={decrementItem}
                        removeItemFromCart={removeItemFromCart}
                        />
                    )})
                }
            </div>
            
            <div className='classAmounts'>
                <div className="subTotal">
                    <span>Subtotal</span>
                    <span>£{total}</span>
                </div>
                <div className="discount">
                    <span>Discount</span>
                    <span>£{discount}</span>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>£{total - discount}</span>
                    <button>Checkout</button>
                </div>
            </div>
            

        </div>
    )
}

export default CheckoutPage
