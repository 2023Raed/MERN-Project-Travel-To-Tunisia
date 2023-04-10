import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Triple T.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About us </li>
                            <li>cars</li>
                            <li>houses</li>
                            <li>contact us </li>
                           
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                           
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
