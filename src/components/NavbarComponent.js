// Author: themanpreetsingh.github.io
import './NavbarComponent.css';
import { useState } from 'react';
import AvatarIcon from '../icons/AvatarIcon';
import WishlistIcon from '../icons/WishlistIcon';
import CartIcon from '../icons/CartIcon';
import FilterIcon from '../icons/FilterIcon';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function NavbarComponent({onSearch}) {

    const [showMenuIcons, setShowMenuIcons] = useState(false)
    const menuIconsClass = 'menuIcons' + (showMenuIcons ? '' : ' hidden')


    return (
        <div>
            <nav>
                <Link to="/"><h3>GROCERIES</h3></Link>
                <div className="searchBar" >
                    <input type="search" placeholder="Search" onChange={(event) => onSearch(event.target.value)}/>
                    <FilterIcon className="icon"/>
                </div>
                <div className="navBarIcons">
                    <div className="iconContainer">
                        <WishlistIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <AvatarIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <CartIcon className="icon"/>
                    </div> 
                    <FaBars className="menu" onClick={() => setShowMenuIcons(!showMenuIcons)}/>
                </div>
            </nav>
            <div className={menuIconsClass}>
                    <div className="">
                        <WishlistIcon className="icon"/>
                    </div>
                    <div className="">
                        <AvatarIcon className="icon"/>
                    </div>
                    <div className="">
                        <CartIcon className="icon"/>
                    </div> 
            </div>
        </div>
    )
}

export default NavbarComponent;