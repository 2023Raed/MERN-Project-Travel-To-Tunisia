import React from 'react'
import './HeroStyles.css'


import Video from '../../assets/Lets Discover Tunisia  🇹🇳.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
               
                
            </div>
        </div>
    )
}

export default Hero
