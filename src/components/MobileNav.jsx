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
      <img src={brandMobileLogo} alt="" />
    </div>
    <div className="text-2xl">
      <button onClick={toggleMenu}>
       <img src={menuIcon} alt="" />
      </button>
    </div>
    <div className={`absolute top-full left-0 w-full bg-dark transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}>
      <ul className="flex flex-col items-start p-4 space-y-4">
        {
            navLinks.map((e)=>{
                return(
                    <li><a href="/" className="text-white text-lg">{e.link}{e.img}</a></li>
                )
            })
        }
       
       
      </ul>
    </div>
  </nav>
  )
}

export default MobileNav