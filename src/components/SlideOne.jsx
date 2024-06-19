import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import HeroSlider from './HeroSlider';
import CompanySlider from './CompanySlider';
import { sliderOne, sliderTwo, sliderThree } from '../assets'; 

const SlideOne = ({ nextSlide, prevSlide }) => {
    const sliderData = [
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSwipeRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
        }, 3000); 

        return () => clearInterval(interval);
    }, [sliderData.length]);

    return (
        <div className='bg-primary pt-32 md:pt-40 pb-10'>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11.3}>
                    <div data-aos="zoom-in">
                        <h1 className='text-5xl lg:text-heading font-extrabold uppercase text-left'>Celebrating African Talent</h1>
                        <p className='my-6 text-base leading md:text-lg text-left font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt utine labore et <br /> dolore fugiat nulla lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt <br />utine labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="button hidden lg:flex">
                        <button onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
                        <button onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </Grid>
            </Grid>
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0">
                <HeroSlider />
            </div>
            <div {...handlers} className='block md:hidden pb-10'>
                <div className='overflow-hidden flex flex-col items-center'>
                    <div className="w-10/12 flex justify-center">
                        <div className="blog-card">
                        <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0">
                            <img className='' src={sliderData[currentImageIndex].imgSrc} alt={`Slide ${currentImageIndex + 1}`} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <CompanySlider />
        </div>
    );
};

export default SlideOne;
