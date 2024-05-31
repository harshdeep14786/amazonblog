import React from 'react'

import Fashion from '../../assets/Fashion.jpg'
import Beauty from '../../assets/Beauty.jpg'
import Art from '../../assets/art.jpeg'
import Acc from '../../assets/4571410.jpg'
import Elect from '../../assets/OIP.jpeg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find millions of products with fast local delivery.</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Accesories</p>
                <p>Beauty & Personal Care</p>
                <p>Electronics</p>
                <p>Art & Craft</p>
                <p>Clothes</p>
            </div>
            <div className='container'>
                <img src={Fashion} alt='' />
                <img src={Beauty} alt='' />
                <img src={Art} alt='' />
                <img src={Acc} alt='' />
                <img src={Elect} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
