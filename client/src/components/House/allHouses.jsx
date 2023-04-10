import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'
import './all-Houses.css';

const AllHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/houses")
      .then(res => {
        console.log(res.data)
        setHouses(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="allhouse">
      <h1>All Houses</h1>
      <div><button><Link  to={`/addhouse`}>Add a House</Link></button></div>
      <table>
        <thead>
          <tr>
            
            <th>image Of House</th>
            <th>Number of room</th>
            
            <th>Adress</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house._id}>
              <td>{house.imageOfHouse}</td>
              <td>{house.numberOfRoom}</td>
              
              <td>{house.address}</td>
              <td>{house.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllHouses;