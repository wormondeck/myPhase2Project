import React from 'react';
// import { Link, useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom'

const CarCard = ({ car }) => {
  // const cars = useOutletContext();
  // console.log(cars)

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