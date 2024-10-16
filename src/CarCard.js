import React from 'react';
import { Link } from 'react-router-dom'

function CarCard({ car }) {
  
  return (
    <article>
      <h4>{car.name}</h4>
      <p>
        <Link to={`/CarInfo/${car.id}`}>Pricing/Details</Link>
      </p>    
    </article>
  )
}

export default CarCard;