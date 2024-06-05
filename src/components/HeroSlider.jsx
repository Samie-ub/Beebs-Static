import React, { useState } from 'react';
import { sliderOne, sliderThree, sliderTwo, companyFive, companyFour, companyOne, companyThree, companyTwo } from '../assets';

const HeroSlider = ({ setBgColor }) => {
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < sliderData.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
        setBgColor('bg-new-color'); // Change to the new bg color when next is clicked
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        setBgColor('bg-primary'); // Change back to the original bg color when prev is clicked
    };

    return (
        <div className='hidden md:block'>
            <div className='pl-0 mt-2'>
                <div className="button hidden lg:flex">
                    <button onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='overflow-hidden pl-10'>
                    <div className="slider flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                        {sliderData.map((e, index) => (
                            <img key={index} src={e.imgSrc} alt="images" className="w-slider-image flex-shrink-0 px-2" />
                        ))}
                    </div>
                </div>
                <p className='text-center mt-5'>As seen on</p>
                <div className="company-container mt-6 ml-12 hidden lg:flex items-center gap-14 justify-center w-11/12 overflow-x-hidden">
                    {companyLogo.map((e, index) => (
                        <img key={index} src={e.imgSrc} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
