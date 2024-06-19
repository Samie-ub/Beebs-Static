import React, { useEffect, useRef } from 'react';
import { modalOne, modalThree, modalTwo } from '../assets';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const TribeSlider = () => {
  const modalData = [
    {
      imgSrc: modalThree,
      link: "#",
      title: "Actor/Actress",
      description: "Land your big break! Book your next audition and get cast for your perfect role"
    },
    {
      imgSrc: modalTwo,
      link: "#",
      title: "VoiceOver Artists",
      description: "It’s giving slay! - BrownDot connects you to amazing model opportunities."
    },
    {
      imgSrc: modalOne,
      link: "#",
      title: "Content Creators",
      description: "Your voice, your views, your content. Collaborate with agencies looking for UGC"
    },
    {
      imgSrc: modalThree,
      link: "#",
      title: "Actor/Actress",
      description: "Land your big break! Book your next audition and get cast for your perfect role"
    },
    {
      imgSrc: modalTwo,
      link: "#",
      title: "VoiceOver Artists",
      description: "It’s giving slay! - BrownDot connects you to amazing model opportunities."
    },
    {
      imgSrc: modalOne,
      link: "#",
      title: "Content Creators",
      description: "Your voice, your views, your content. Collaborate with agencies looking for UGC"
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      Draggable.create(sliderRef.current, {
        type: "x",
        bounds: {
          minX: -sliderRef.current.scrollWidth + sliderRef.current.clientWidth,
          maxX: 0
        }
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-14 hidden md:block pl-12">
      <div
        className="modal-slider flex transition-transform duration-500 ease-in-out"
        ref={sliderRef}
      >
        {modalData.map((e, index) => (
          
          <div key={index} className="modal-card flex-shrink-0 w-tribe-image px-3">
            <div  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

            <img src="" alt="" />
            <a href={e.link}>
              <img className='w-full h-4/5' src={e.imgSrc} alt={e.title} />
              <h1 className='font-bold text-3/3xl mt-3'>{e.title}</h1>
              <p className='w-full text-base font-semibold'>{e.description}</p>
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default TribeSlider;
