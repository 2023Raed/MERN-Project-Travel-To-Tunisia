import React from 'react'
import ImgCarousel from '../carousel/ImgCarousel';
import Destinations from '../destinations/Destinations'
import Footer from '../footer/Footer';
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search';
import Selects from '../selects/Selects';
import './main.css'


function Main() {
  return (
    <>
    
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
     
      </>
  );
}

export default Main;