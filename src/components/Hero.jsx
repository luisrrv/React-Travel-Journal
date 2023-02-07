import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';
// import grid from '../images/photo-grid.png'

const Hero = () => {
  return (
  <section className='hero'>
    <div className="blob"></div>
    {/* <img src={grid} alt='hero' className='hero--photo' /> */}
    <h1 className='hero--text'>My travels</h1>
    <a href='#cards-list' className='hero--header'>
    {/* <h1 className='hero--header-text'>My journey so far</h1> */}
    <h1 className='hero--header-text'><AiOutlineDown /></h1>
    </a>
    {/* <p className='hero--text'></p> */}
  </section>
  )
}

export default Hero;
