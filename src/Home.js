import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import CarCard from './CarCard';

const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/cars")
        .then(r => r.json())
        .then(data => setCars(data))
        .catch(error => console.error(error))
    }, [])

    const carList = cars.map(car =>{
        return <CarCard key={car.id} car={car} />
    })
    
    return (
        <div>
            <header>
              <NavBar />
              <p>An application to purchase luxurious vehicles in 1:64 size</p>
            </header>
            <main>
              <h1>27.99% msrp</h1>
              {carList}
             <hr/>
            </main>

        </div>
    );
}

export default Home;