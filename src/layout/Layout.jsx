import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import TribeSection from '../components/TribeSection';
import Footer from '../components/Footer';
import VideoSection from '../components/VideoSection';
import VisionSection from '../components/VisionSection';
import TextSlider from '../components/TextSlider';
import BlogSection from '../components/BlogSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    const updateCounter = () => {
      setCounter((prev) => {
        if (prev >= 100) return 100;
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100); 
      });
    };

    const counterInterval = setInterval(updateCounter, Math.floor(Math.random() * 200) + 50);

    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    if (counter >= 100) {
      gsap.to(".counter", { duration: 0.25, delay: 0.5, opacity: 0 });
      gsap.to(".bar", {
        duration: .5,
        delay: 0.5,
        height: 0,
        stagger: { amount: 1.6 },
        ease: "power4.inOut",
        onComplete: () => {
          document.body.classList.remove('overflow-hidden');

        }
      });

    }
  }, [counter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('overflow-hidden');
    }, 7500);

    return () => clearTimeout(timeout);
  }, []);



  const handleResize = () => {
    setIsMobile(window.innerWidth < 1026);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      <div className={` ${loading ? 'fixed' : 'hidden'} top-0 w-screen h-screen bg-transparent z-50`}>

        <div className="counter fixed flex items-end justify-end w-full h-full text-primary p-2 text-lg md:text-9xl z-50">{counter}%</div>
        <div className="overlay fixed flex w-full h-full z-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bar w-full h-full bg-pale"></div>
          ))}
        </div>
      </div>

      <div className={`${loading ? 'overflow-x-hidden' : 'overflow-x-auto'}`}>
        {isMobile ? <MobileNav /> : <Navbar />}
        <Hero />
        <TribeSection />
        <VideoSection />
        <VisionSection />
        <TextSlider />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
