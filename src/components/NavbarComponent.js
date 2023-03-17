import './NavbarComponent.css';
import AvatarIcon from '../icons/AvatarIcon';
import WishlistIcon from '../icons/WishlistIcon';
import CartIcon from '../icons/CartIcon';
import FilterIcon from '../icons/FilterIcon';
import { Link } from 'react-router-dom';

function NavbarComponent({onSearch}) {

    return (
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
            </div>
        </nav>
    )
}

export default NavbarComponent;