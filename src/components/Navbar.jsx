import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { arrowIcon, brandLogo } from '../assets'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 4;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
        <nav className={`  top-0 fixed backdrop-blur-sm w-full transition-all ease-in-out z-20 ${scrolled ? 'py-3 nav-bg' : 'py-7 bg-dark'}`}>
            <Grid container justifyContent={"center"}>
                <Grid item md={11.5} lg={11.2}>
                    <Grid container justifyContent={"space-between"} alignItems={"center"} >
                        <Grid item md={1} lg={1.3}>
                            <img className='w-full' src={brandLogo} alt="brand logo" />
                        </Grid>
                        <Grid item md={11} lg={10.7}>
                            <div className="nav-right flex items-center justify-end gap-8">

                                <ul className='flex items-center gap-2'>
                                    {navLinks.map((e) => {
                                        return (
                                            <>
                                                <li className='bg-black text-white text-xs px-4 py-3 rounded-full font-light ' >{e.link}{e.img}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                                <div className="buttons flex gap-2">


                                    <button className='text-light border-light border text-base px-4 py-2 rounded-full font-bold'>Sign In</button>
                                    <button className=' bg-light     text-base px-5 py-2 rounded-full font-medium'>Join Browndot</button>

                                </div>
                            </div>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </nav>
    )
}

export default Navbar