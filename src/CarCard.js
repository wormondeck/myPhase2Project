import React from 'react';
import { Link } from 'react-router-dom'

const CarCard = ({ car }) => {

  return (
    <article>
      <h4>{car.name}</h4>

      <p>
        <Link to={`/CarInfo/${car.id}`}>Pricing/Details</Link>
        <br/>
      </p>    
    </article>
    )
}

export default CarCard;