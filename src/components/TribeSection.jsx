import { Grid } from '@mui/material'
import React from 'react'
import TribeSlider from './TribeSlider'
import TribeMobile from './TribeMobile'


function TribeSection() {
    return (
      <div className='bg-secondary overflow-hidden md:mx-10 lg:mx-0'>
    <div className=' py-10'>
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} lg={11}>
          <p className='font-bold text-sm md:text-base'>DREAMERS</p>
          <h2 className=' uppercase text-4xl md:text-7xl py-6 font-black'>Find Your TriBe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt utine labore et dolore fugiat <br /> nulla lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Grid>
        <Grid item lg={11}>

<TribeSlider/>
        </Grid>
      </Grid>
    </div>
    <TribeMobile/>
      </div>
  )
}

export default TribeSection