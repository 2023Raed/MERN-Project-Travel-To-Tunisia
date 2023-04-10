import React, { useState } from "react";
import axios from "axios";
import './ReservationCarForm.css';
import { useNavigate  } from 'react-router-dom'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ReservationCarForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState(null);
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('model', model);
    formData.append('color', color);
    formData.append('image', image);
    formData.append('year', year);
    formData.append('price', price);

    axios.post('/api/reservations', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(() => {
        setIsSubmitting(false);
        alert("Reservation submitted successfully");
        navigate("/cars")
      })

      .catch((error) => {
        setErrorMessage(error.message);
        setIsSubmitting(false);
      });
  };
  return (
    <div> 
      <Navbar/>
   
    <div className="reservation-form-container">
      <h1>cars for rents</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="image">Car Image</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year of Construction</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

     
      <div>
  <label htmlFor="price">Price per day</label>
  <input
    type="number"
    id="price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />
</div>

      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  <Footer/>
    </div>
    </div>
  );
};

export default ReservationCarForm;