import React, { useState } from 'react';

const Inventory = ({ onHandleAddCar }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handNameChange = (e) => {
        setName(e.target.value)
    }

    const handColorChange = (e) => {
        setColor(e.target.value)
    }

    const handPriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handImageChange = (e) => {
        setImage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const carListing = {
            name,
            color,
            price,
            image,
        }
        fetch('http://localhost:3000/vehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carListing),
        })
        .then((r) => r.json())
        .then((newCarData) => {
            onHandleAddCar(newCarData)
        })
        .catch((error) => console.error(error)); 
    };
    
  const highlightStyle = {
    backgroundColor: 'yellow',
  };
    
  return (
    <div>
      <h1 style={highlightStyle}>Our Inventory Updates Daily!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder='Name'
            onChange={handNameChange}
          />
          <input
            type="text"
            value={color}
            placeholder='Color'
            onChange={handColorChange}
          />
          <input
            type="text"
            value={price}
            placeholder='Price'
            onChange={handPriceChange}
          />
          <input
            type="text"
            value={image}
            placeholder='Image'
            onChange={handImageChange}
          />
          <button type="submit">Add Car</button>
        </form>
    </div>
  )
}

export default Inventory;