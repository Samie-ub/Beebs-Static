import React,{useEffect} from "react";

import './App.css'
import Layout from './layout/Layout'
import AnimatedCursor from "react-animated-cursor"
import AOS from 'aos';
import 'aos/dist/aos.css';
import useLenis from "./hooks/useLenis";
AOS.init();

function App() {
  useLenis();

  return (
   <>
    <AnimatedCursor
    showSystemCursor={true}
    trailingSpeed ={20}
      innerSize={10}
      outerSize={20}
      color='209, 157, 93'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />
  <Layout/>
   </>
  )
}

export default App
