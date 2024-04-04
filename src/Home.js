import { Outlet, useOutletContext } from 'react-router-dom';
import CarCard from './CarCard';

const Home = () => {
    const cars = useOutletContext();
    const carList = cars.map(car => <CarCard key={car.id} car={car}/>);
    
    return (
      <main>
        <h1>ShowRoom</h1>
        <hr/>
        <Outlet context={cars} />
        {carList} 
      </main>
    );
}

export default Home;