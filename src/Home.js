import React from 'react';
import { useState, useEffect } from 'react';
import Cars from './Cars';

const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/cars")
        .then(r => r.json())
        .then(data => setCars(data))
        .catch(error => console.error(error))
    }, [])

    
    return (
        <div>
            <p>An application to purchase luxurious vehicles in 1:64 size</p>
            <hr/>
        </div>
    );
}

export default Home;