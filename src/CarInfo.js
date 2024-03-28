import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from './NavBar';

const CarInfo = () => {
  const [car, setCar] = useState({});
  const params = useParams();
  const carId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:3000/vehicles/${carId}`)
    .then(r => r.json())
    .then(data => setCar(data))
    .catch(error => console.error(error))
  }, [carId])

  if (!car.name) {
    return <h1>Loading...</h1>
  }

    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>{car.name}</h1>
          </main>
        </>
    );

}

export default CarInfo;