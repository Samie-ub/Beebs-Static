import React, { useState, useEffect } from 'react';
import { modalOne, modalThree, modalTwo } from '../assets';

const TribeSlider = () => {
  const modalData = [
    {
      imgSrc: modalThree,
      title: "Actor/Actress",
      description: "Land your big break! Book your next audition and get cast for your perfect role"
    },
    {
      imgSrc: modalTwo,
      title: "Models",
      description: "Ready to lend your voice? Get voiceover opportunities both remote and in-studio."
    },
    {
      imgSrc: modalOne,
      title: "Content Creators",
      description: "Connecting you with the right industry professionals and bring your vision to life."
    },
    {
      imgSrc: modalThree,
      title: "Actors",
      description: "Audition for roles in films, TV shows, commercials, and more."
    },
    {
      imgSrc: modalTwo,
      title: "Voiceover Artists",
      description: "Lend your voice to animations, audiobooks, and commercials."
    },
    {
      imgSrc: modalOne,
      title: "Photographers",
      description: "Capture moments for various events and industries."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % modalData.length);
    }, 2000); 

    return () => clearInterval(slideInterval);
  }, [modalData.length]);

  const getTransformValue = () => {
    if (currentIndex <= modalData.length - 3) {
      return `translateX(-${currentIndex * 33.33}%)`;
    } else {
      return `translateX(-${(modalData.length - 3) * 33.33}%)`;
    }
  };

  return (
    <div className="relative w-full overflow-hidden mt-14 hidden md:block">
      <div
        className="modal-slider flex transition-transform duration-500 ease-in-out"
        style={{ transform: getTransformValue() }}
      >
        {modalData.map((e, index) => (
          <div key={index} className="modal-card flex-shrink-0 w-1/3 px-2">
            <img className='w-full' src={e.imgSrc} alt={e.title} />
            <h2 className='font-bold text-3xl mt-3'>{e.title}</h2>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TribeSlider;
