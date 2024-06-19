import { Grid } from '@mui/material'
import React from 'react'
import { companyFive, companyFour, companyOne, companyThree, companyTwo } from '../assets'
import CompanySlider from './CompanySlider'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const VideoSection = () => {
    const comapnyLogo = [
        {
            imgSrc: companyOne
        },
        {
            imgSrc: companyTwo
        },
        {
            imgSrc: companyThree
        },
        {
            imgSrc: companyFour
        },
        {
            imgSrc: companyFive
        }
    ]
    return (
        <div className='py-14 bg-video'>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11}>

                    <div className="video">

                    </div>

                    <p className='text-center mt-5'>As seen on</p>
                    <div className="company-container hidden w-full overflow-x-hidden lg:flex mt-6 gap-10 items-center justify-center overflow-hidden">
                        {
                            comapnyLogo.map((e, index) => {
                                return (
                                    <div data-aos="zoom-out-up" className='overflow-hidden'>

                                        <img key={index} src={e.imgSrc} alt="" />
                                    </div>

                                )
                            })
                        }
                    </div>
                </Grid>
            </Grid>
            <CompanySlider />
        </div>
    )
}

export default VideoSection