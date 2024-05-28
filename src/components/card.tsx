import './componentStyles/card.scss';
import Button from './button';
import './../theme.scss';
import { useNavigate } from "react-router-dom";

type CardProps = {
    img: string;
    title: string;
    price: string;
};

function Card({ img, title, price }: CardProps) {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/detail_product");
      };
  
    return (
        <div className="card" >
            <img className='img-product' src={img} alt="producto" />
            <h3 className='sub-title'>{title}</h3>
            <p className='text'>{price}</p>
            <Button onClick={handleNavigate} text="Comprar" />
        </div>
    );
}

export default Card;
