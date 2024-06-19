import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { modalOne, modalThree, modalTwo, dotIcon } from '../assets';

const TribeMobile = () => {
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
      description: "It’s giving slay! - BrownDot connects you to amazing model opportunities."
    },
    {
      imgSrc: modalOne,
      link:"#",
      title: "Content Creators",
      description: "Your voice, your views, your content. Collaborate with agencies looking for UGC"
    },
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
      description: "It’s giving slay! - BrownDot connects you to amazing model opportunities."
    },
    {
      imgSrc: modalOne,
      link:"#",
      title: "Content Creators",
      description: "Your voice, your views, your content. Collaborate with agencies looking for UGC"
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
                <div className="w-4/5">
                    <div className="blog-card w-full">
                        <img className='w-full ' src={modalData[currentIndex].imgSrc} alt={modalData[currentIndex].title} />
                       
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