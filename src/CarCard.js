import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const CarCard = ({car}) => {
  const cars = useOutletContext();
  console.log(cars)

  return (
    <article>
      <h2>{car.name}</h2>

      <p>
        <Link to={`/CarInfo/${car.id}`}>View Vehicle</Link>
      </p>    
    </article>
    )
}

export default CarCard;