import React, {useEffect} from 'react'
import CardSlider from './CardSlider';

const TextSlider = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.tt-scrolling-text');
        elements.forEach(element => {
            const speed = element.getAttribute('data-scroll-speed');
            const innerElement = element.querySelector('.tt-scrolling-text-inner');
            if (innerElement) {
                innerElement.style.animationDuration = `${speed}s`;
            }
        });
    }, []);
  return (
    <div className='bg-video'>
    <div className=' py-6 border-b-2 border-solid border-border '>
         <div className="tt-scrolling-text overflow-x-hidden overflow-y-hidden" data-scroll-speed="20">
            <div className="tt-scrolling-text-inner text-slider text-5xl md:text-7xl" data-text="Ready, Set, Cast - Actors, Models, Voice Artists, Screenwriter, and Crew Await Your Project!">
            Ready, Set, Cast - Actors, Models, Voice Artists, Screenwriter, and Crew Await Your Project!
            </div>

        </div>
    </div>
<CardSlider/>
    </div>
  )
}

export default TextSlider