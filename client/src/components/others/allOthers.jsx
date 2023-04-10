import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link} from 'react-router-dom'
import './allOthers.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const AllOthers = () => {
    const [others, setOthers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/others")
          .then(res => {
            console.log(res.data)
            setOthers(res.data)
          })
          .catch(err => console.log(err))
      }, [])
  return (
    <div>
    
    <div className='allothers'>
        <h1>Other Services</h1>
        <div><button><Link  to={`/addothers`}>Add a Service</Link></button></div>
        <table>
        <thead>
          <tr>
            <th>image</th>
            <th>description</th>
            <th>Model</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {others.map((other) => (
            <tr key={other._id}>
              <td>{other.images}</td>
              <td>{other.description}</td>
              <td>{other.model}</td>
              <td>{other.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
    </div>
  
    
  );
};

export default AllOthers