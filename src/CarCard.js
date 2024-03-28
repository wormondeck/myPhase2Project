import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
  
  return (
    <div>
      <h2>{car.name}</h2>
      <p>
        <Link to={`/CarInfo/${car.id}`}>View Vehicle</Link>
      </p>    
    </div>
    )
}

export default CarCard;