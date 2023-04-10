import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'
import './allCars.css';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cars")
      .then(res => {
        console.log(res.data)
        setCars(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
     
    <div className="allcar">
      <h1>All Cars</h1>
      <div><button><Link  to={`/addcar`}>Add a Car</Link></button></div>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>Name of car</th>
            <th>Model</th>
            <th>Color</th>
            <th>Year of construction</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.imageOfCar}</td>
              <td>{car.nameOfCar}</td>
              <td>{car.model}</td>
              <td>{car.YearOfConstruction}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
    
     
  );
   
};

export default AllCars;