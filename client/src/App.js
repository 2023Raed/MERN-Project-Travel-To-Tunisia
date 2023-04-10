import React from 'react'

import Main from './components/main/Main';

import { Route, Routes } from 'react-router-dom';
import ReservationCarForm from './components/car/ReservationCarForm';
import ReservationFormHouse from './components/House/ReservationFormHouse';
import ReservationFormOthers from './components/others/ReservationFormOthers';
import AllHouses from './components/House/allHouses';
import AllCars from './components/car/allCars';
import AllOthers from './components/others/allOthers';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './components/services/services';



function App() {
  return (
 
    <div>
      <div>
      <Navbar/>
      </div>

    
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/addcar' element={<ReservationCarForm/>}/>
      <Route path='/addhouse' element={<ReservationFormHouse/>}/>
      <Route path='/addothers' element={<ReservationFormOthers/>}/>
      <Route path='/houses' element={<AllHouses/>}/>
      <Route path='/cars' element={<AllCars/>}/>
      <Route path='/others' element={<AllOthers/>}/>
      <Route path='/services' element={<Services/>}/>
      
      </Routes> 
      <div>
        <Footer/>
      </div>
     
    </div>
  );
}

export default App;
