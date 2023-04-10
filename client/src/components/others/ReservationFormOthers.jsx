import React, { useState } from "react";
import axios from "axios";
import "./Others.css"; // import CSS file
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
const RentalForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  
  const nav = useNavigate()

 

  const handleSubmit = (event) => {
    event.preventDefault();

    const rentalData = {
      name: name,
      image: image,
      model: model,
      color: color,
      price: price,
    };

    axios.post("/http://localhost:8000/api/others", rentalData)
      .then((response) => {
        console.log(response.data);
        nav("./others")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar/>
    <div className="back">
    <form className="rental-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">description:</label>
        <input type="text" id="name" onChange={(event) => setName(event.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="color">color:</label>
        <input type="text" id="color" onChange={(event) => setColor(event.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="model">Model:</label>
        <input type="text" id="name" onChange={(event) => setModel(event.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input type="text" id="name" onChange={(event) => setImage(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" onChange={(event) => setPrice(event.target.value)} />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default RentalForm;