import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { blogOne, blogTwo, dotIcon } from "../assets";

const blogData = [
    {
        imgSrc: blogTwo,
        title: "LANDING YOUR FIRST ROLE",
        readTime: "3 minute Read",
        para: "Navigating the world of acting can be extremely difficult, we’ve spoken to a few agencies and we’re on hand with",
    },
    {
        imgSrc: blogOne,
        title: "LANDING YOUR FIRST ROLE",
        readTime: "3 minute Read",
        para: "Navigating the world of acting can be extremely difficult, we’ve spoken to a few agencies and we’re on hand with some ",
    },
    {
        imgSrc: blogOne,
        title: "BUILDING YOUR ACTING",
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

const BlogMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === blogData.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogData.length - 1 : prevIndex - 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <div className='block md:hidden pt-10'>
            <div {...handlers} className='overflow-hidden flex flex-col items-center'>
                <div className="w-11/12  flex">
                    <div className="blog-card">
                        <img className='w-full' src={blogData[currentIndex].imgSrc} alt={blogData[currentIndex].title} />
                        <div className='flex justify-between items-center py-5'>
                            <p className='font-extrabold text-medium'>{blogData[currentIndex].title}</p>
                            <span className='w-2/5 border border-dark px-4 py-1 rounded-full text-sm text-center'>{blogData[currentIndex].readTime}</span>
                        </div>
                        <p>{blogData[currentIndex].para}</p>
                    </div>
                </div>
                <div className='flex justify-center mt-8 '>
                    <div className="dot flex items-center gap-2">
                        {blogData.map((_, index) => (
                            <img
                                key={index}
                                className={`${index === currentIndex ? 'active border border-dark p-1 rounded-full' : ''}`}
                                src={dotIcon}
                                alt={`Dot ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogMobile;
