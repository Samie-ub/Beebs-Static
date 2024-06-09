import React, { useState } from 'react';
import { brandMobileLogo, menuIcon } from '../assets';


const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      link: "Find Jobs"
    },
    {
      link: "For Talent",
      img: <i class="fa-solid fa-chevron-down"></i>
    },
    {
      link: "For Casting Teams",
      img: <i class="fa-solid fa-chevron-down"></i>
    },
    {
      link: "BrownDot",
      img: <i class="fa-solid fa-chevron-down"></i>
    },
    {
      link: "Magazine",
      img: <i class="fa-solid fa-chevron-down"></i>
    },
  ]
  return (
    <nav className="bg-dark text-white p-4 flex justify-between items-center fixed w-full z-50">
      <div>
        <img className='w-14' src={brandMobileLogo} alt="" />
      </div>
      <div className="text-2xl flex items-center">
        <button onClick={toggleMenu}>
          <img className='w-8' src={menuIcon} alt="" />
        </button>
      </div>
      <div className={`absolute top-full left-0 w-full bg-dark transition-transform transform py-5 ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}>
        <ul className="flex flex-col items-start sm:items-center p-4 space-y-4">
          {
            navLinks.map((e, index) => {
              return (
                <li key={index} className='bg-black text-white text-center text-xs px-4 py-3 rounded-full font-light w-full sm:w-6/12'><a href="/" className="text-white text-md">{e.link}{e.img}</a></li>
              )
            })
          }


        </ul>
        <div className="buttons flex flex-col gap-4 mx-5">
          <button className='text-light border-light border text-base px-4 py-2 rounded-full font-bold'>Sign In</button>
          <button className=' bg-light     text-base px-5 py-2 rounded-full font-medium'>Join Browndot</button>

        </div>
      </div>
    </nav>
  )
}

export default MobileNav