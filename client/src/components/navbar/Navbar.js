import React, { useState } from 'react'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'


import { Link } from 'react-router-dom'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Triple T .</h2>
            </div>
            <ul className="nav-menu">
                <Link to='/' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='/services' smooth={true} duration={500} ><li>service</li></Link>
                <Link to='/cars' smooth={true} duration={500} ><li>cars</li></Link>
                <Link to='/houses' smooth={true} duration={500} ><li>houses</li></Link>
                <Link to='/others'smooth={true} duration={500} ><li>others</li></Link>
            </ul>
        
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

          
            </div>

    
    )
}

export default Navbar
