import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

const CarInfo = () => {
  const params = useParams();
  const cars = useOutletContext();

  const car = cars.find(car => car.id === params.id);
 
  if (!car) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1 className="car-name">{car.name} | ${car.price}</h1>
      <img src={car.image} alt={car.name} />
      <p className="car-info">{car.info}</p>
    </div>
  
  );
}

export default CarInfo;