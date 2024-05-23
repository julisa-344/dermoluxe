import './componentStyles/card.scss';
import Button from './button';
import './../theme.scss';
import { useState } from 'react';

type CardProps = {
    img: string;
    title: string;
    price: string;
};

function Card({ img, title, price }: CardProps) {

    return (
        <div className="card">
            <img className='img-product' src={img} alt="producto" />
            <h3 className='sub-title'>{title}</h3>
            <p className='text'>{price}</p>
            <Button onClick={() => console.log('Button clicked')} text="Comprar" />
        </div>
    );
}

export default Card;