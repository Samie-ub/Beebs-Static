import { Grid } from '@mui/material'
import React from 'react'
import HeroSlider from './HeroSlider'
import HeroMobile from './HeroMobile'

const Hero = () => {
    return (
        <div className='bg-primary py-10 md:py-20'>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11.3}>
                    <h1 className='text-5xl lg:text-heading font-extrabold uppercase text-left leading-10'>Celebrating African Talent</h1>
                    <p className='my-6 text-lg text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt utine labore et <br /> dolore fugiat nulla lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt <br />utine labore et dolore magna aliqua.</p>

                </Grid>
            </Grid>
            <HeroSlider />
            <HeroMobile/>

        </div>
    )
}

export default Hero