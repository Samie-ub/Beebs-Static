import { Grid } from '@mui/material'
import React from 'react'
import { companyFive, companyFour, companyOne, companyThree, companyTwo } from '../assets'
import CompanySlider from './CompanySlider'

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
                    <div className="company-container hidden w-full overflow-x-hidden lg:flex mt-6 gap-14 items-center justify-start">
                        {
                            comapnyLogo.map((e) => {
                                return (

                                    <img className='w-9/12' src={e.imgSrc} alt="" />
                                )
                            })
                        }
                    </div>
                </Grid>
            </Grid>
                    <CompanySlider/>
        </div>
    )
}

export default VideoSection