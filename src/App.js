import React from 'react';
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/vehicles")
        .then(r => r.json())
        .then(data => setCars(data))
        .catch(error => console.error(error))
    }, [])

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={cars}/>
        </>
    );
};

export default App;