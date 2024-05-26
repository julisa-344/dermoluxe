import { Link } from 'react-router-dom';
import './componentStyles/navBar.css';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            <IconButton >
                <HomeIcon />
            </IconButton>
            <IconButton >
                <SearchIcon />
            </IconButton>
            <IconButton >
                <ShoppingCartIcon />
            </IconButton>
        </div>
    </nav>
  );
};

export default Nav;