import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

const CarInfo = () => {
  const params = useParams();
  const cars = useOutletContext();
  
  const car = cars.find(car => car.id === parseInt(params.id));
  
 

  if (!car) {
    return <h1>Loading...</h1>
  }
  console.log("Image URL:", car.image);
    return (
          <aside>
            <h1>{car.name}</h1>
            <img src={car.image} alt={car.name}/>
          </aside>
  
    );

}

export default CarInfo;