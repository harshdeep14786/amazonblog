import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>Amazon Music</h3>
                    <p>Streams millions of Music</p>
                </div>
                <div className='col'>
                    <h3>Amazon Business</h3>
                    <p>Everything for your business</p>
                </div>
                <div className='col'>
                    <h3>Amazon Drive</h3>
                    <p>Cloud storage from Amazon</p>
                </div>
                <div className='col'>
                    <h3>Amazon Web Services</h3>
                    <p>Scalable Cloud Computing Services
 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
