import './componentStyles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer>
      <div className='generalFooter'>
        <div className='socialMediaFooter'>
            <div className='linksToSocial'>
                <h2>Redes Sociales</h2>
                <div className='iconsSocialFooter'>
                    <Link to='#facebook'><img src='/social-media/icons8-facebook.svg' /></Link>
                    <Link to='#instagram'><img src='/social-media/icons8-instagram-48.svg'/></Link>
                    <Link to='#whatsapp'><img src='/social-media/icons8-whatsapp.svg'/></Link>
                </div>
            </div>
            <div className='adressFooter'>
                <h2>Dirección:</h2>
                <p>Lorem Ipsum, 993, etc etc </p>
                <p>Lima - Perú</p>
            </div>
        </div>
        <div className='categoriesFooter'>
            <h2>Categorías</h2>
            <ul>
                <li><Link to='#skin'>Skin</Link></li>
                <li><Link to='#shade'>Sombra</Link></li>
                <li><Link to='#cilios'>Cilios</Link></li>
                <li><Link to='#blush'>Blush</Link></li>
                <li><Link to='#highlighter'>Iluminadores</Link></li>
                <li><Link to='#base'>Base</Link></li>
            </ul>
        </div>
        <div className='brandsFooter'>
            <h2>Marcas Afiliadas</h2>
            <ul>
                <li><Link to='#marca1'>Marca01</Link></li>
                <li><Link to='#marca2'>Marca02</Link></li>
                <li><Link to='#marca3'>Marca03</Link></li>
                <li><Link to='#marca4'>Marca04</Link></li>
                <li><Link to='#marca5'>Marca05</Link></li>
                <li><Link to='#marca6'>Marca06</Link></li>
                <li><Link to='#marca7'>Marca07</Link></li>
                <li><Link to='#marca8'>Marca08</Link></li>
            </ul>
        </div>
        <div className='paymentFooter'>
            <h2>Formas de Pago</h2>
            <div className='paymentIcons'>
                <img src='/payments/icons8-visa.svg'/>
                <img src='/payments/icons8-mastercard.svg'/>
                <img src='/payments/icons8-american-express.svg'/>
                <img src='/payments/icons8-paypal.svg'/>
            </div>
        </div>
      </div>
      <p>Copyright © Dermoluxe. 2024. Todos los derechos reservados</p>
    </footer>
  )
};

export default Footer;