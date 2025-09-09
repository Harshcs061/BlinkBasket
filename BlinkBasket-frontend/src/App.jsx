import './App.css'
import React from 'react';
import { TypewriterEffect } from './components/ui/typewriter-effect'
import { TypewriterEffectSmooth } from './components/ui/typewriter-effect';
import { Button } from './components/ui/button';
function App() {

  const words = [
    {
      text: " An ",
    },
    {
      text: " E-Commerce ",
    },
    {
      text: " Shopping ",
    },
    {
      text: " Store : ",
    },
    {
      text: " BlinkBasket",
      className: "text-[rgba(255,193,7,1)]",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
    </div>
    </>
  )
}

export default App
