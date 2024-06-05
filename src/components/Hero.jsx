import { Grid } from '@mui/material'
import React from 'react'
import HeroSlider from './HeroSlider'
import HeroMobile from './HeroMobile'
import CompanySlider from './CompanySlider'

const Hero = () => {
    return (
        <div className='bg-primary pt-32 md:pt-52 pb-10 '>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11.3}>
                    <h1 className='text-5xl lg:text-heading font-extrabold uppercase text-left leading-10'>Celebrating African Talent</h1>
                    <p className='my-6 text-lg text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt utine labore et <br /> dolore fugiat nulla lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt <br />utine labore et dolore magna aliqua.</p>

                </Grid>
            </Grid>
            <HeroSlider />
            <HeroMobile/>
            <CompanySlider/>

        </div>
    )
}

export default Hero