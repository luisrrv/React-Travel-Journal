import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';

const Hero = () => {

  const closeMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelector('.menu-items');
    menuBtn && menuBtn.classList.add('on');
    menuItems && menuItems.classList.remove('on');
  }

  return (
  <section className='hero' onClick={closeMenu}>
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
