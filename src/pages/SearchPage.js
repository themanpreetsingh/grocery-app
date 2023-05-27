// Author: themanpreetsingh.github.io
import { useState, useEffect, useContext } from 'react';
import CategoriesComponent from "../components/CategoriesComponent"
import ProductCard from "../components/ProductCard"
import './SearchPage.css'
import CartContext from '../CartContext';

function SearchPage({searchFilter}) {

    //used to store the count of each item in cart(for fast access)
    const [countMap, setCountMap] = useState(new Map())
    const [currentCategory, setCurrentCategory] = useState('All Items');
    const {cart, products, wishlist, setWishlist} = useContext(CartContext);

    function onCategorySelect(categoryName) {
        setCurrentCategory(categoryName)
    }

    function fillCountMap() {
        const tempCountMap = new Map()
        cart.forEach(item => {
            tempCountMap.set(item.name, item.count)
        });
        setCountMap(tempCountMap)
    }

    function addToWishlist(productName) {
        //TODO: try using a hashset for storing wishlist
        if(!wishlist.find(item => item.name === productName)) {
            const productToBeAdded = products.find(item => item.name === productName)
            const tempWishlist = [...wishlist]
            tempWishlist.push(productToBeAdded)
            setWishlist(tempWishlist)
        }
    }
    
    useEffect(() => fillCountMap(), [])

    return (
        <div>
            <CategoriesComponent onCategorySelect={onCategorySelect}/>
            <h1>Trending Items</h1>
            <div className="productContainer">
            {
                
                products.filter( product => product.type === currentCategory || currentCategory === 'All Items' || (currentCategory === 'offers' && product.offer))
                .filter( product => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
                .map(
                    (product) => {return (
                        <ProductCard 
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        img={product.img}
                        price={product.price}
                        available={product.available}
                        countMap={countMap}
                        addToWishlist={addToWishlist}
                    />
                    )}
                )
                
            }
            </div>
            
        </div>
    )
}

export default SearchPage
