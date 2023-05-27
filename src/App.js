// Author: themanpreetsingh.github.io
import './App.css';
import { useState, useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import SearchPage from './pages/SearchPage';
import CheckoutPage from './pages/CheckoutPage';
import CartContext from './CartContext';
import { Route, Routes } from "react-router-dom";
import WishlistPage from './pages/WishlistPage';

function App() {
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  //used to keep track of currently applied discounts
  const [appliedDiscounts, setAppliedDiscounts] = useState({cocaCola: 0, croissant: 0})
  const [discount, setDiscount] = useState(0)
  const [wishlist, setWishlist] = useState([])

  //function used to fetch data from api 
  async function fetchData() {
    try {
      const response = await fetch("https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all")
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    //function used to get set the products state variable when data is received
    async function getData() {
      const fetchedData = await fetchData();
      //adding offer information to the products list
      const croissant = fetchedData.find(item => item.name === 'Croissants')
      const cocaCola = fetchedData.find(item => item.name === 'Coca-Cola')
      croissant.offer = true
      cocaCola.offer = true

      setProducts(fetchedData)
    }
    getData()
  }, []);

  function onSearch(filter) {
    setSearchFilter(filter)
  }

  return (
    <CartContext.Provider value={{cart, setCart, products, appliedDiscounts, setAppliedDiscounts, discount, setDiscount, wishlist, setWishlist}}>
      <div className="container">
        <NavbarComponent onSearch={onSearch}/>
        <Routes>
          <Route path='/' element={<SearchPage searchFilter={searchFilter}/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/wishlist' element={<WishlistPage/>}/>
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
