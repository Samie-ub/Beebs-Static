import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { sliderOne, sliderThree, sliderTwo,dotIcon} from '../assets';
const HeroMobile = () => {
    const sliderData = [
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
        { imgSrc: sliderOne },
        { imgSrc: sliderTwo },
        { imgSrc: sliderThree },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

      const handleSwipeLeft = () => {
          setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
      };
  
      const handleSwipeRight = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
      };
  
      const handlers = useSwipeable({
          onSwipedLeft: handleSwipeLeft,
          onSwipedRight: handleSwipeRight,
      });
  return (
    <div>
           <div className='block md:hidden pb-10'>
            <div {...handlers} className='overflow-hidden flex flex-col items-center'>
                <div className="w-11/12  flex justify-center">
                    <div className="blog-card">
                        <img className='w-full' src={sliderData[currentIndex].imgSrc} alt={sliderData[currentIndex].title} />
                       
                           
                           
                       
                        
                    </div>  
                </div>
                <div className='flex justify-center mt-8 '>
                    <div className="dot flex items-center gap-2">
                        {sliderData.map((_, index) => (
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
    </div>
  )
}

export default HeroMobile