import React from 'react'
import { cardSliderOne, quoteIcon } from '../assets'
import { Grid } from '@mui/material'

const CardSlider = () => {
  const cardData = [
    {
      para: "Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.",
      title: "Adeniji Korede",
      position: "Director at Film One"
    }
  ]
  return (
    <div>
      <div className="mobile-version px-6 py-10 block md:hidden">
        <img src={quoteIcon} alt="" />
        <img src={cardSliderOne} alt="" />
        <p className='text-2xl py-4' >Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices. </p>
        <p className='text-2xl'>Adeniji Korede</p>
        <span className='text-sm'>Director at Film One</span>
      </div>

      <div className="desktop-version hidden md:block py-12">
        <Grid container justifyContent={"center"}>
          <Grid item md={11} lg={11}>
            <img src={quoteIcon} className='w-20' alt="" />
            <div className='flex items-center justify-between gap-10'>
              <div className="slider-number">
                <ul>
                  <li className='active h-16 mb-4' >
                    <span className='ml-2'>01</span>
                  </li>
                  <li className='h-16 mb-4'>
                    <span className='ml-2'>02</span>
                  </li>
                  <li className='h-16 mb-4'>
                    <span className='ml-2'>03</span>
                  </li>
                  <li className='h-16 mb-4'>
                    <span className='ml-2'>04</span>
                  </li>
                </ul>
              </div>
              <img src={cardSliderOne} alt="" />
              <div>
                <p className='text-mediem lg:text-3xl'>
                  Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.
                </p>
                <p className='text-2xl mt-5'>Adeniji Korede</p>
                <span className='text-sm'>Director at Film One</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default CardSlider