import { Grid } from '@mui/material'
import React from 'react'
import BlogCarousel from './BlogCarousel '
import BlogMobile from './BlogMobile'

const BlogSection = () => {
    
  return (
    <div className='bg-secondary py-20 '>
        <Grid container justifyContent={"center"}>
            <Grid item xs={11} md={11} lg={11}>
            <div  data-aos="zoom-in">
            <p className='font-bold text-border text-sm md:text-base'>BrownDot Mag</p>
                    <h2 className='font-bold uppercase text-4xl lg:text-6xl py-6 text-border'>Get advice, casting news + content</h2>
                    <p className='text-border'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt <br /> utine labore et dolore fugiat nulla lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
            </Grid>
            <Grid item xs={12} sm={11.7} md={12} lg={11.7}>
                <BlogCarousel/>
                <BlogMobile/>
            </Grid>
        </Grid>
    </div>
  )
}

export default BlogSection