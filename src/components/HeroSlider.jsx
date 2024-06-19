import React, { useState } from 'react';
import { sliderOne, sliderThree, sliderTwo, companyFive, companyFour, companyOne, companyThree, companyTwo } from '../assets';

const HeroSlider = () => {
    const sliderData = [
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
    ];
    const companyLogo = [
        { imgSrc: companyOne },
        { imgSrc: companyTwo },
        { imgSrc: companyThree },
        { imgSrc: companyFour },
        { imgSrc: companyFive }
    ];
    return (
        <div className='hidden md:block'>
            <div className='pl-0 mt-2'>             
                <div className='overflow-hidden pl-10'>
                    <div className="slider flex transition-transform duration-500 ease-in-out">
                        {sliderData.map((e, index) => (
                            <img key={index} src={e.imgSrc} alt="images" className="w-slider-image flex-shrink-0 px-2" />
                        ))}
                    </div>
                </div>
                <p className='text-center mt-5'>As seen on</p>
                <div className="company-container mt-6 ml-12 hidden lg:flex items-center gap-14 justify-center w-11/12 overflow-x-hidden overflow-hidden">
                    {companyLogo.map((e, index) => (
                        <div data-aos="zoom-out-up" className='overflow-hidden'>
                        <img key={index} src={e.imgSrc} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;