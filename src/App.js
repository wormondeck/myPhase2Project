import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Inventory from './Inventory';


function App() {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/vehicles")
        .then(r => r.json())
        .then(data => setCars(data))
        .catch(error => console.error(error))
    }, [])

    function handleAddCar(newCar) {
        setCars([...cars, newCar])
      }

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Inventory onHandleAddCar={handleAddCar} />
            <Outlet context={cars} />
        </>
    );
};

export default App;