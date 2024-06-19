import React, { useEffect, useRef, useState } from 'react';
import {quoteIcon } from '../assets';
import { Grid } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardSlider = () => {
  const cardData = [
    {
      imgSrc: "https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.",
      title: "Adeniji Korede",
      position: "Director at Film One"
    },
    {
      imgSrc: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "Another testimonial text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "John Doe",
      position: "CEO at Company"
    },
    {
      imgSrc: "https://images.pexels.com/photos/4966973/pexels-photo-4966973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "Yet another testimonial text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Jane Smith",
      position: "CTO at Tech Inc."
    },
    {
      imgSrc: "https://images.pexels.com/photos/3206118/pexels-photo-3206118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "More testimonial text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Samuel Green",
      position: "Manager at Business Co."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 10%",
      end: `+=${containerRef.current.scrollHeight}`,
      pin: true,
      snap: 1 / (cardData.length - 1),
      onUpdate: (self) => {
        const newSlide = Math.round(self.progress * (cardData.length - 1));
        if (newSlide !== currentSlide) {
          setCurrentSlide(newSlide);
          
        }
      },
      
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cardData.length, currentSlide]);

  useEffect(() => {
    gsap.fromTo(
      slideRefs.current[currentSlide],
      { y: 100, opacity: 0, delay:.5  },
      { y: 0, opacity: 1, duration: 0.5, }
    );
  }, [currentSlide]);

  return (
    <div ref={containerRef}>
      <div className="mobile-version px-6 py-10 block md:hidden">
        <img src={quoteIcon} alt="" />
        <img src={cardData[currentSlide].imgSrc} className='rounded-full object-cover object-bottom' style={{ height: '22rem', width: '25rem' }} alt="" />
        <p className='text-2xl py-4'>{cardData[currentSlide].para}</p>
        <p className='text-2xl'>{cardData[currentSlide].title}</p>
        <span className='text-sm'>{cardData[currentSlide].position}</span>
      </div>

      <div className="desktop-version hidden md:block py-12">
        <Grid container justifyContent={"center"}>
          <Grid item md={11} lg={11}>
            <img src={quoteIcon} className='w-20' alt="" />
            <div className='flex items-center justify-between gap-10'>
              <div className="slider-number transition-all ease-in-out">
                <ul>
                  {cardData.map((_, index) => (
                    <li
                      key={index}
                      className={`h-16 mb-4 slider-number transition-all ease-in-out ${index === currentSlide ? 'active' : ''}`}
                    >
                      <span className='ml-2'>{`0${index + 1}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img className='rounded-full object-cover object-bottom' style={{ height: '27rem', width: '27rem' }} src={cardData[currentSlide].imgSrc} alt="" />
              <div ref={addToRefs} className='w-6/12'>
                <p className='text-medium lg:text-3xl'>
                  {cardData[currentSlide].para}
                </p>
                <p className='text-2xl mt-5'>{cardData[currentSlide].title}</p>
                <span className='text-sm'>{cardData[currentSlide].position}</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CardSlider;
