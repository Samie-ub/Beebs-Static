import React from 'react'
import { Grid } from '@mui/material'
import { arrowRightIcon, arrowUpRightIcon, featureImage, toggleIcon } from '../assets'

const VisionSection = () => {

    const featureData = [
        {
            heading: "World-CLASS TOOLS",
            para: "Our end-to-end casting platform helps you do it all - create and manage casting calls, track applications and hire!",
            link: "#"
        },
        {
            heading: "designed to help you grow",
            para: "Our end-to-end casting platform helps you do it all - create and manage casting calls, track applications and hire!",
            link: "#"
        },
        {
            heading: "Intuitive Ai & Automation",
            para: "Our end-to-end casting platform helps you do it all - create and manage casting calls, track applications and hire!",
            link: "#"
        },
    ]
    return (
        <div className='bg-hr py-14'>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11}>
                    <p className='font-bold text-span text-sm md:text-base'>VISIONARIES</p>
                    <h2 className='font-bold uppercase text-4xl lg:text-7xl py-6 text-secondary'>Everything you need to cast!</h2>
                    <p className='text-video'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt utine labore et dolore fugiat <br /> nulla lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <Grid container alignItems={"center"} sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: { xs: "center", md: 'space-between' } }}>
                        <Grid item lg={5} className='pt-10'>
                            {
                                featureData.map((e) => {
                                    return (
                                        <>
                                            <div className="features hidden md:flex gap-5 items-start mb-10">
                                                <div className="icon">
                                                    <img className='feature-icon' src={toggleIcon} alt="" />
                                                </div>
                                                <div className="content">
                                                    <h1 className='uppercase text-3xl'>{e.heading}</h1>
                                                    <p className='text-base mt-2'>{e.para}</p>
                                                    <a href="#" className="hidden-button mt-2">Learn more<img src={arrowRightIcon} alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="features-mobile flex md:hidden items-end mb-1 p-6">

                                                <div className=" text-feature">
                                                    <h4 className='uppercase text-xl font-semibold'>{e.heading}</h4>
                                                    <p className='pt-1 text-base'>{e.para}</p>
                                                </div>

                                                <div className='m-icon w-24'>
                                                    <a href={e.link} >
                                                        <img src={arrowUpRightIcon} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </Grid>
                        <Grid item xs={11} sm={10} md={12} lg={6}>
                            <img className='mt-10' src={featureImage} alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    )
}

export default VisionSection