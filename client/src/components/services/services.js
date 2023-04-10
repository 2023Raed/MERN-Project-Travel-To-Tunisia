import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Styleservice.css'
const Services = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/services")        
            .then((response) => {
                // Always see what the server is coming back with 
                console.log(response.data)
                
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div  className='whole' >
             <div className='title'> 
                <h1>Our services</h1>
             </div>  
    <div className='pt1'>
        <button className = "btn btn-success"><Link      style={{textDecoration:"none" , color:"blue"  }}    to={"/cars"} > Cars </Link></button>
         <p>Our car rental service provides you with the convenience and freedom to explore your destination 
            on your own terms. Whether you're in town for a business meeting
            , a family vacation, or just looking for a fun weekend getaway, we've got you covered. 
            Our fleet of vehicles includes a wide range of options to suit your needs, 
            from compact cars for city driving to spacious SUVs for off-road adventures </p>
         </div>
         <div className='pt2'>
         <button className = "btn btn-success"><Link      style={{textDecoration:"none" , color:"blue"  }}    to={"/houses"} > Houses </Link></button>
         <p>Welcome to our rental housing service! We understand that finding the perfect place to call home can be a daunting task,
             which is why we're here to help. Our platform offers a wide selection of rental properties,
              ranging from cozy apartments to spacious family homes.
               We pride ourselves on providing a simple and efficient way for renters to find their ideal living space.</p>
         </div>
         
         <div className='pt3'>
         <button className = "btn btn-success"><Link      style={{textDecoration:"none" , color:"blue"  }}    to={"/other"} > Others </Link></button> 
         <p> In our website you can enjoy another services :renting boats,renting jetski,renting bikes ...</p> 
         </div>
         </div>

        
     

    )
}

export default Services