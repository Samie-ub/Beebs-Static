import React from 'react';
import { Grid } from '@mui/material';
import { companyFive, companyFour, companyOne, companyThree, companyTwo, heroSliderOne, heroSliderTwo } from '../assets';
import CompanySlider from './CompanySlider';

const SlideTwo = ({ nextSlide, prevSlide }) => {
    const companyLogo = [
        { imgSrc: companyOne },
        { imgSrc: companyTwo },
        { imgSrc: companyThree },
        { imgSrc: companyFour },
        { imgSrc: companyFive }
    ];
    return (

        <div className='bg-slidetwo pt-32 md:pt-40 pb-10'>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11}>
                    <div data-aos="zoom-in">
                        <h1 className='text-5xl lg:text-heading font-extrabold uppercase text-left'>Find your next big role!</h1>
                        <p className='my-6 text-base leading md:text-lg text-left font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt utine labore et <br /> dolore fugiat nulla lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt <br /> utine labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="button hidden lg:flex">
                        <button onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
                        <button onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </Grid>
                <Grid item xs={11} md={11.3}>
                    <Grid container justifyContent={'center'} gap={4}>
                        <Grid item xs={12} md={5.7}>
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0">
                                <img className='w-full' src={heroSliderOne} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5.7}>
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                data-aos-offset="0">
                                <img className='w-full' src={heroSliderTwo} alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <p className='text-center mt-5'>As seen on</p>
            <div className="company-container mt-6 ml-12 hidden lg:flex items-center gap-14 justify-center w-11/12 overflow-x-hidden overflow-hidden">
                {companyLogo.map((e, index) => (
                    <div key={index} data-aos="zoom-out-up" className='overflow-hidden'>
                        <img src={e.imgSrc} alt="" />
                    </div>
                ))}
            </div>
            <CompanySlider/>
        </div>

    );
};

export default SlideTwo;
