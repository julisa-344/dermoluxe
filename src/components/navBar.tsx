import { Link } from 'react-router-dom';
import './componentStyles/navBar.css';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav() {
  return (
    <nav>
      <div className='Logo'>
        <Link to='/' aria-label='Home'><img src='/Vector.svg' alt="Logo" /></Link>
      </div>
      <div className='navMain'>
        <ul>
          <li><Link to="/" aria-label="Home">Home</Link></li>
          <li><Link to="/shop" aria-label="Shop">Shop</Link></li>
          <li><Link to="/promotions" aria-label="Promotions">Promociones</Link></li>
        </ul>
      </div>
      <div className='right-icons'>
        <Link to='/LoginSignup' aria-label='Login'>
          <IconButton>
            <PersonIcon />
          </IconButton>
        </Link>
        <Link to='/' aria-label='Home'>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to='/cart' aria-label='Cart'>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;