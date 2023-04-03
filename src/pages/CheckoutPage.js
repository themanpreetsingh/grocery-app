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
        if(cocaCola !== undefined && cocaCola.count >= 6 ) {
            //no. of discounted coke cans applicable on current cart
            const discountedCokeCount = Math.floor((cocaCola.count - appliedDiscounts.cocaCola) / 6) 
            const numCokeToBeAdded = discountedCokeCount - appliedDiscounts.cocaCola 
            if(numCokeToBeAdded > 0) {
                //discountedCokeAdded represents the number of coke cans added in this function call 
                let discountedCokeAdded = 0
                for(let i = 0; i < numCokeToBeAdded && cocaCola.available > 0; ++i) {
                    ++cocaCola.count;
                    --cocaCola.available;
                    ++discountedCokeAdded;
                } 
                setCart(tempCart)
                setAppliedDiscounts({...appliedDiscounts, cocaCola: (appliedDiscounts.cocaCola + discountedCokeAdded)})
                setDiscount(discount + (Number(cocaCola.price.slice(1)) * discountedCokeAdded ))
            }
        }
        

        if(croissant !== undefined && croissant.count >= 3) {
            const discountedCoffeeCount = Math.floor((croissant.count) / 3) 
            let numCoffeeToBeAdded = discountedCoffeeCount - appliedDiscounts.croissant
            const coffee = tempCart.find(item => item.name === 'Coffee')
            if(numCoffeeToBeAdded > 0) {
                if(coffee === undefined) {
                    // adding coffee to the cart for the first time
                    const coffeeProduct = products.find(item => item.name === 'Coffee')
                    const addedProduct = {
                        name: 'Coffee',
                        price: coffeeProduct.price,
                        count: numCoffeeToBeAdded,
                        img: coffeeProduct.img,
                        available: coffeeProduct.available - numCoffeeToBeAdded
                    }
                    tempCart.push(addedProduct)
                    setDiscount(discount + Number(coffeeProduct.price.slice(1)) * addedProduct.count)
                } else if(coffee.available > numCoffeeToBeAdded) {
                    coffee.count += numCoffeeToBeAdded
                    coffee.available -= numCoffeeToBeAdded
                    setDiscount(discount + Number(coffee.price.slice(1)) * numCoffeeToBeAdded)
                } else {
                    coffee.count += coffee.available
                    setDiscount(discount + Number(coffee.price.slice(1)) * coffee.available)
                    numCoffeeToBeAdded = coffee.available
                    coffee.available = 0
                }
                setCart(tempCart)
                setAppliedDiscounts({...appliedDiscounts, croissant: (appliedDiscounts.croissant + numCoffeeToBeAdded)})
            }
            
        } 

    }

    //remove offers which are no longer applicable
    function removeAppliedOffer() {
        const tempCart = [...cart]

        if(appliedDiscounts.cocaCola > 0) {
            const cocaCola = tempCart.find(item => item.name === 'Coca-Cola')
            if(cocaCola !== undefined) {
                const discountedCokeCount = Math.floor((cocaCola.count) / 6) 
                const discountDifference = appliedDiscounts.cocaCola - discountedCokeCount
                if(discountDifference > 0) {
                    cocaCola.count -= discountDifference
                    cocaCola.available += discountDifference
                    setCart(tempCart)
                    setAppliedDiscounts({...appliedDiscounts, cocaCola: (appliedDiscounts.cocaCola - discountDifference)})
                    setDiscount(discount - (Number(cocaCola.price.slice(1)) * discountDifference ))
                }
            } else {
                // if coke is not present in cart but discounts are applied
                const cokePrice = Number(products.find(item => item.name === 'Coca-Cola').price.slice(1))
                setDiscount(discount - (cokePrice * appliedDiscounts.cocaCola))
                setAppliedDiscounts({...appliedDiscounts, cocaCola: 0})
            }
        }

        if(appliedDiscounts.croissant) {
            const croissant = tempCart.find(item => item.name === 'Croissants')
            const coffee = tempCart.find(item => item.name === 'Coffee')
            if(coffee !== undefined && croissant !== undefined) {
                const discountedCoffeeCount = Math.floor(croissant.count / 3)
                const discountDifference = appliedDiscounts.croissant - discountedCoffeeCount
                if(discountDifference > 0) {
                    coffee.count -= discountDifference
                    coffee.available += discountDifference
                    setCart(tempCart)
                    if(coffee.count === 0) {
                        removeItemFromCart('Coffee')
                    }
                    setDiscount(discount - (Number(coffee.price.slice(1)) * discountDifference))
                    setAppliedDiscounts({...appliedDiscounts, croissant: appliedDiscounts.croissant - discountDifference})
                }
            } else {
                const coffeePrice = Number(products.find(item => item.name === 'Coffee').price.slice(1))
                setDiscount(discount - (coffeePrice * appliedDiscounts.croissant))
                setAppliedDiscounts({...appliedDiscounts, croissant: 0})
            }
            
        }
    }

    useEffect(() => {
        getApplicableOffers()
        removeAppliedOffer()
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
                    <span>£{total.toFixed(2)}</span>
                </div>
                <div className="discount">
                    <span>Discount</span>
                    <span>£{discount.toFixed(2)}</span>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>£{(total - discount).toFixed(2)}</span>
                    <button>Checkout</button>
                </div>
            </div>
            

        </div>
    )
}

export default CheckoutPage
