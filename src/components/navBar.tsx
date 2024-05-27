import { Link } from 'react-router-dom';
import './componentStyles/navBar.css';
import { Icon, IconButton } from '@material-ui/core';

const Nav = () => {
  return (
    <nav>
        <div className='Logo'>
          <img src='/Vector.svg'/>
        </div>
        <div className='navMain'>
          <ul>
            <li><Link to="/" aria-label="Home">Home</Link></li>
            <li><Link to="/shop" aria-label="Shop">Shop</Link></li>
            <li><Link to="/promotions" aria-label="Promotions">Promociones</Link></li>
          </ul>
        </div>
        <div className='right-icons'>
            <IconButton>
                <Icon>Home</Icon>
            </IconButton>
            <IconButton>
                <Icon>Search</Icon>
            </IconButton>
            <IconButton>
                <Icon>Favorite</Icon>
            </IconButton>
            <IconButton>
                <Icon>shopping_cart</Icon>
            </IconButton>
        </div>
    </nav>
  );
};

export default Nav;