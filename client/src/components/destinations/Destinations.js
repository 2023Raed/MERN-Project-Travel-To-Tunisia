import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/El-Jem.jpg'
import BoraBora2 from '../../assets/SidiBouSaid.jpg'
import Maldives from '../../assets/sousse.jpg'
import Maldives2 from '../../assets/dessert.jpg'
import KeyWest from '../../assets/djerba_1.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>your vacation our priority </h1>
                <p>On the tunisian Best places</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
