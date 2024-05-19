import { Link } from 'react-router-dom';
import '@material/web/button/filled-button.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/icon/icon.js';
import './componentStyles/navBar.css';

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
            <md-filled-icon-button>
                <md-icon>Home</md-icon>
            </md-filled-icon-button>
            <md-filled-icon-button>
                <md-icon>Search</md-icon>
            </md-filled-icon-button>
            <md-filled-icon-button>
                <md-icon>Favorite</md-icon>
            </md-filled-icon-button>
            <md-filled-icon-button>
                <md-icon>shopping_cart</md-icon>
            </md-filled-icon-button>
        </div>
    </nav>
  );
};

export default Nav;