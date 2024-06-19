import React, { useState } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import HeroMobile from './HeroMobile';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const slides = [
        <SlideOne nextSlide={nextSlide} prevSlide={prevSlide} />,
        <SlideTwo nextSlide={nextSlide} prevSlide={prevSlide} />,
        <SlideThree nextSlide={nextSlide} prevSlide={prevSlide} />,
    ];

    return (
        <div>
            <div className="hidden md:block">
                {slides[currentSlide]}
            </div>
            <div className="block md:hidden pb-8">
                <HeroMobile currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            </div>
        </div>
    );
};

export default Hero;
