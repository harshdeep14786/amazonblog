import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>What are you looking for</h1>
                <p className='search-text'> Search for the things you want. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter Keyword..' />
                    </div>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                </form>
            </div>
        </div>
    )
}

export default Hero
