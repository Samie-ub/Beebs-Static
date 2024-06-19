import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import { dotIcon } from '../assets';

const HeroMobile = ({ currentSlide, setCurrentSlide }) => {
    const slides = [
        <SlideOne />,
        <SlideTwo />,
        <SlideThree />,
    ];

    const handleSwipeLeft = () => {
        setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSwipeRight = () => {
        setCurrentSlide((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <div {...handlers} className='overflow-hidden flex flex-col items-center'>
            <div className="w-full flex justify-center">
                {slides[currentSlide]}
            </div>
            <div className='flex justify-center mt-8'>
                <div className="dot flex items-center gap-2">
                    {slides.map((_, index) => (
                        <img
                            key={index}
                            className={`${index === currentSlide ? 'active border border-dark p-1 rounded-full' : ''}`}
                            src={dotIcon}
                            alt={`Dot ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroMobile;
