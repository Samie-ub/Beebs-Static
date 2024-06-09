import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { modalOne, modalThree, modalTwo, dotIcon } from '../assets';

const TribeMobile = () => {
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

      const handleSwipeLeft = () => {
          setCurrentIndex((prevIndex) => (prevIndex === modalData.length - 1 ? 0 : prevIndex + 1));
      };
  
      const handleSwipeRight = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? modalData.length - 1 : prevIndex - 1));
      };
  
      const handlers = useSwipeable({
          onSwipedLeft: handleSwipeLeft,
          onSwipedRight: handleSwipeRight,
      });
  return (
    <div className='block md:hidden pb-10'>
            <div {...handlers} className='overflow-hidden flex flex-col items-center'>
                <div className="w-11/12">
                    <div className="blog-card w-full">
                        <img className='w-full' src={modalData[currentIndex].imgSrc} alt={modalData[currentIndex].title} />
                       
                            <h2 className='font-semibold text-2xl mt-3'>{modalData[currentIndex].title}</h2>
                            <p className='font-extrabold text-base'>{modalData[currentIndex].description}</p>
                       
                        
                    </div>  
                </div>

                <div className='flex justify-center mt-8 '>
                    <div className="dot flex items-center gap-2">
                        {modalData.map((_, index) => (
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
  )
}

export default TribeMobile