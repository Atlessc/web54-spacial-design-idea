import './App.css'
import React, {useEffect, useRef } from 'react'
import Img1 from '/space-1.jpg'
import NavBar from './components/Nav'
import Posts from './components/Posts'


function App() {
  const contentRef = useRef();
  const backgroundRef = useRef();
  const cardContainerRef = useRef();

  useEffect(() => {
    contentRef.current.addEventListener('mousemove', (event) => {
      const x = event.clientX - contentRef.current.offsetLeft;
      const y = event.clientY - contentRef.current.offsetTop;

      const xPercent = (x / contentRef.current.offsetWidth) * 100;
      const yPercent = (y / contentRef.current.offsetHeight) * 100;

      const xRotate = (xPercent - 50) * 0.2;
      const yRotate = (yPercent - 50) * -0.2;
      const xTranslate = (xPercent - 50) * ((Math.sqrt(2) * -2)*Math.PI);
      const yTranslate = (yPercent - 50) * ((Math.sqrt(2) * -2)*Math.PI);


      backgroundRef.current.style.transform = `perspective(600px) rotateX(${yRotate}deg) rotateY(${xRotate}deg) translateX(${xTranslate}px) translateY(${yTranslate}px)`;
      cardContainerRef.current.style.transform = `perspective(600px) rotateX(${yRotate}deg) rotateY(${xRotate}deg) translateX(${xTranslate}px) translateY(${yTranslate}px)`;
    });
  }, []);

  useEffect(() => {
    contentRef.current.addEventListener('mouseleave', () => {
      backgroundRef.current.style.transition = `all 750ms ease-in 5s`;
      backgroundRef.current.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
      cardContainerRef.current.style.transition = `all 750ms ease-in 5s`;
      cardContainerRef.current.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
    });
    contentRef.current.addEventListener('mouseenter', () => {
      backgroundRef.current.style.transition = `none`;
      cardContainerRef.current.style.transition = `none`;
    });
  }, []);

  return (
    <>
      <div className='app'>
        <div ref={backgroundRef} className='background-img' style={{backgroundImage: `url(${Img1})`}}></div>
        <div ref={contentRef} className='content'>
          <NavBar />
          <div ref={cardContainerRef} className='card-container'>
            
            <div className='level-1'>
            <Posts />
            </div>
            <div className='level-2'>
            <Posts />
            </div>
            <div className='level-3'>
            <Posts />
            </div>
            <div className='level-4'>
            <Posts />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
