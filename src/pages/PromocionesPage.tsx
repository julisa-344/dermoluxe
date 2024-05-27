import Footer from "../components/footer";
import Nav from "../components/navBar";
import './../theme.scss';

function PromocionesPage () {
  return (
    <>
        <Nav/>
    <div>
      <h1 className="tittle-main p-4">Promociones</h1>
      <p className="text text-center">¡Descubre nuestras promociones!</p>
    </div>
    <Footer/>
    </>
  );
}

export default PromocionesPage;