import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
    return (
        <article>
            <h2>{car.name}</h2>
            <Link to="/cars">View Vehicle</Link>
        </article>
    )
}

export default CarCard;