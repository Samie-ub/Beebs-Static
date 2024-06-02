import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import TribeSection from '../components/TribeSection';
import Footer from '../components/Footer';
import VideoSection from '../components/VideoSection';
import VisionSection from '../components/VisionSection';
import initLocomotiveScroll from "../hooks/LocomotiveScroll";
import TextSlider from '../components/TextSlider';
import BlogSection from '../components/BlogSection';


const Layout = () => {
    const [isMobile, setIsMobile] = useState(false);

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
            {isMobile ? <MobileNav /> : <Navbar />}
            <Hero/>
            <TribeSection/>
            <VideoSection/>
            <VisionSection/>
            <TextSlider/>
            <BlogSection/>
            <Footer/>
        </div>
    );
};

export default Layout;
