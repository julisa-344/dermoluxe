import '../pages.scss'
import Card from '../components/card';
import Button from '../components/button';
import { useNavigate } from "react-router-dom";

function HomePage() {
    let navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/shop");
      };

    return (
        <>
            <section className="hero flex">
                <div className='hero-info'>
                    <h1 className='title-hero'>Cuida tu Piel <br/> con Confianza</h1>
                    <p className='text'>
                        Explora nuestra gama de productos y encuentra el tratamiento perfecto para tu tipo de piel.
                        ¡Compra Ahora y Disfruta de un 10% de Descuento en tu Primera Compra!
                    </p>
                    <Button text="Ver productos" onClick={handleButtonClick} />
                </div>
                <div className='content-img'>
                    <div className='border-img'>
                    <img className='img-hero' src="../../public/img/imghero.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='flex justify-around m-6'>
                <Card  title='Product' price='s/. 76' img="../../public/img/product1.png"/>
                <Card  title='Product' price='s/. 76' img="../../public/img/product1.png"/>
                <Card  title='Product' price='s/. 76' img="../../public/img/product1.png"/>
            </section>
            <section className='form-home'>
                <h2 className='title color-white'>¿QUIERES SABER NUESTRAS NOTICIAS?</h2>
                <p className='text color-white'>¡Ingresa tu correo electrónico para estar al día de nuestras novedades!</p>
                <Button text="Suscribirme" onClick={() => { }} />
            </section>

        </>
    )
}

export default HomePage;