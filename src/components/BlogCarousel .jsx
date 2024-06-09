import React, { useState } from 'react';
import { blogOne, blogTwo, hugeLeftIcon, hugeRightIcon } from "../assets";

const blogData = [
    {
        imgSrc: blogTwo,
        title: "LANDING YOUR FIRST ROLE",
        readTime: "3 minute Read",
        para: "Navigating the world of acting can be extremely difficult, we’ve spoken to a few agencies and we’re on hand with some handy tips and guides",
    },
    {
        imgSrc: blogOne,
        title: "LANDING YOUR FIRST ROLE",
        readTime: "3 minute Read",
        para: "Navigating the world of acting can be extremely difficult, we’ve spoken to a few agencies and we’re on hand with some handy tips and guides",
    },
    {
        imgSrc: blogOne,
        title: "BUILDING YOUR ACTING RESUME",
        readTime: "5 minute Read",
        para: "Building a strong resume is crucial for your acting career. Here are some tips to make yours stand out.",
    },
    {
        imgSrc: blogTwo,
        title: "FINDING AUDITIONS",
        readTime: "4 minute Read",
        para: "Learn the best ways to find and secure auditions for various roles in the acting industry.",
    },
];

const BlogCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogData.length - 2 : prevIndex - 2));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= blogData.length - 2 ? 0 : prevIndex + 2));
    };

    return (
        <div className='py-10 hidden md:block'>
            <div className='flex items-center lg:gap-10 md:gap-2 justify-center'>
                <button className='bg-dark hover:bg-feature transition-all rounded-full p-3' onClick={handlePrevClick}>
                    <img src={hugeLeftIcon} alt="Previous" />
                </button>
                {blogData.slice(currentIndex, currentIndex + 2).map((e, index) => (
                    <div key={index} className="blog-card w-5/12">
                        <img className='w-full' src={e.imgSrc} alt={e.title} />
                        <div className='flex justify-between items-center py-5'>
                            <p className='font-bold lg:text-2xl md:text-base'>{e.title}</p>
                            <span className='border border-dark md:text-sm md:px-2 lg:px-4 py-1 rounded-full'>{e.readTime}</span>
                        </div>
                        <p>{e.para}</p>
                    </div>
                ))}
                <button className='bg-dark rounded-full  hover:bg-feature transition-all p-3 relativess' onClick={handleNextClick}>
                    <img src={hugeRightIcon} alt="Next" />
                </button>
            </div>
        </div>
    );
}

export default BlogCarousel;
