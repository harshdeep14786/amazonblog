import React from 'react'

import './Featured.css'

import Maclipstick from '../../assets/maclipstick.jpg'
import Mac2 from '../../assets/mac2.jpg'
import Mac3 from '../../assets/mac3.jpg'
import Mac4 from '../../assets/mac4.jpg'
import Mac5 from '../../assets/mac5.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Rated</h1>
            <p className='featured-text'>Selected Products by Millions of People</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Maclipstick} alt='' />
                <img src={Mac2} alt='' />
                <img src={Mac3} alt='' />
                <img src={Mac4} alt='' />
                <img src={Mac5} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>Maybelline New York Super Stay Matte Ink Spiced Edition, Exhilarator, 5 ml.</h2>
                        <p>Summer Sale</p>
                        <p className='price'>$9.98 $199.60 per ml</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Brand:</p><p>MAYBELLINE</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Colour:</p><p>Exhilarator</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Item Form:</p><p>Liquid</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Finish Type:</p><p>Matte</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>Unique arrow applicator for a more precise liquid lipstick application </p> <br></br>
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>
            </div>
    )
}

export default Featured
