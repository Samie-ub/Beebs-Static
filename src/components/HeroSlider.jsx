import React, { useState } from 'react';
import { sliderOne, sliderThree, sliderTwo, companyFive, companyFour, companyOne, companyThree, companyTwo, } from '../assets';
import CompanySlider from './CompanySlider'

const HeroSlider = () => {
    const sliderData = [
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
    ];
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < sliderData.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className='hidden md:block'>
            <div className='ml-10 mt-2'>
                <div className="button hidden lg:flex">
                    <button onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='overflow-hidden'>

                    <div className="slider flex transition-transform duration-500 ease-in-out " style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                        {sliderData.map((e, index) => (
                            <img key={index} src={e.imgSrc} alt="images" className="w-1/3 flex-shrink-0 px-2" />
                        ))}
                    </div>
                </div>
                <p className='text-center mt-5'>As seen on</p>
                <div className="company-container mt-6 ml-6 hidden lg:flex items-center gap-14 justify-center w-11/12 overflow-x-hidden">
                    {
                        comapnyLogo.map((e) => {
                            return (

                                <img className='w-full' src={e.imgSrc} alt="" />
                            )
                        })
                    }
                </div>

            </div>
            <CompanySlider />
        </div>
    );
}

export default HeroSlider;
