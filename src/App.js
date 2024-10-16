import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Inventory from './Inventory';

function App() {
  const [cars, setCars] = useState([]);
  const [selectedColor, setSelectedColor] = useState('All')
  
  useEffect(() =>{
    fetch("http://localhost:3000/vehicles")
    .then(r => r.json())
    .then(data => setCars(data))
    .catch(error => console.error(error))
  }, [])
  
  function handleAddCar(newCar) {
    setCars([...cars, newCar]);
  } 
  
  function handleColor(e) {
    setSelectedColor(e.target.value)
  }
  
  let filteredCars = cars.filter(car => {
    if (selectedColor === "All") return true
    return car.color === selectedColor
  })
    
    return (
      <>
        <header>
          <NavBar />
        </header>
          <Inventory onHandleAddCar={handleAddCar} />
          <select onChange={handleColor} name="filter">
            <option value="All">Filter By Color</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
            <option value="red">Red</option>
          </select>
          <Outlet context={filteredCars} />
      </>
    );
};

export default App;