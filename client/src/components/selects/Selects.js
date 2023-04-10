import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/El-Jem.jpg'
import BoraBora2 from '../../assets/sousse.jpg'
import Maldives from '../../assets/SidiBouSaid.jpg'
import Maldives2 from '../../assets/Tozeur.jpg'
import Maldives3 from '../../assets/dougga.jpg'
import KeyWest from '../../assets/dessert.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='El jem' />
                <SelectsImg bgImg={BoraBora2} text='Sousse' />
                <SelectsImg bgImg={Maldives} text='Sidi Bousaid' />
                <SelectsImg bgImg={Maldives2} text='Touzeur' />
                <SelectsImg bgImg={Maldives3} text='Douga' />
                <SelectsImg bgImg={KeyWest} text='Sahara' />
            </div>

        </div>
    )
}

export default Selects
