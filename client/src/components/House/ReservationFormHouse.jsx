import React, { useState } from 'react';
import axios from 'axios';

import './House.css';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function HouseForRent() {
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [numRooms, setNumRooms] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChanged = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { address, image, numRooms, pickupDate, returnDate, price };
    axios.post('http://example.com/api/house-for-rent', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success here
      })
      .catch((error) => {
        console.log(error);
        // Handle error here
      });
  };

  return (
    <div>
      <Navbar/>
    <div className="house-for-rent-container">
      <h1 className="house-for-rent-heading">House for Rent</h1>
      <form className="house-for-rent-form" onSubmit={handleSubmit}>
        <div className="house-for-rent-form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div>
        <label htmlFor="image">Car Image</label>
        <input
          type="file"
          id="image"
          value={image}
          accept=".jpg,.png,.jpeg"
          onChange={handleImageChanged}
        />
      </div>

        <div className="house-for-rent-form-group">
          <label htmlFor="numRooms">Number of Rooms:</label>
          <input type="number" id="numRooms" value={numRooms} onChange={(e) => setNumRooms(e.target.value)} />
        </div>

        <div className="house-for-rent-form-group">
          <label htmlFor="pickupDate">Pickup Date:</label>
          <input type="date" id="pickupDate" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
        </div>

        <div className="house-for-rent-form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input type="date" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </div>

        <div className="house-for-rent-form-group">
          <label htmlFor="price">Price per Night:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <button className="house-for-rent-form-submit-btn" type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
    </div>
  );
}

export default HouseForRent;
