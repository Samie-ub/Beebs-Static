import React, { useState, useEffect } from 'react';
import { modalOne, modalThree, modalTwo } from '../assets';

const TribeSlider = () => {
  const modalData = [
    {
      imgSrc: modalThree,
      link:"#",
      title: "Actor/Actress",
      description: "Land your big break! Book your next audition and get cast for your perfect role"
    },
    {
      imgSrc: modalTwo,
      link:"#",
      title: "VoiceOver Artists",
      description: "Ready to lend your voice? Get voiceover opportunities both remote and in-studio."
    },
    {
      imgSrc: modalOne,
      link:"#",
      title: "Models",
      description: "Connecting you with the right industry professionals and bring your vision to life."
    },
    {
      imgSrc: modalThree,
      link:"#",
      title: "Influencers",
      description: "Audition for roles in films, TV shows, commercials, and more."
    },
    {
      imgSrc: modalTwo,
      link:"#",
      title: "Musicians",
      description: "Lend your voice to animations, audiobooks, and commercials."
    },
    {
      imgSrc: modalOne,
      link:"#",
      title: "Content Creators",
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
    <div className="relative w-full overflow-hidden mt-14 hidden md:block pl-12">
      <div
        className="modal-slider flex transition-transform duration-500 ease-in-out"
        style={{ transform: getTransformValue() }}
      >
        {modalData.map((e, index) => (
          <div key={index} className="modal-card flex-shrink-0 w-tribe-image px-2">
            <a href={e.link}>
            <img className='w-full h-4/5' src={e.imgSrc} alt={e.title} />
            <h1 className='font-bold text-3xl mt-3'>{e.title}</h1>
            <p className='w-full text-base font-semibold'>{e.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TribeSlider;
