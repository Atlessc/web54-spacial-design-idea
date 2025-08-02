import './App.css'
import { useEffect, useRef } from 'react'
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

      const xPercentBackground = (x / contentRef.current.offsetWidth) * 100;
      const yPercentBackground = (y / contentRef.current.offsetHeight) * 100;
      const xPercentContent = (x / contentRef.current.offsetWidth) * 100;
      const yPercentContent = (y / contentRef.current.offsetHeight) * 100;

      const xRotateBackground = (xPercentBackground - 50) * 0.14;
      const yRotateBackground = (yPercentBackground - 50) * -0.14;
      const xRotateContent = (xPercentContent - 50) * 0.2;
      const yRotateContent = (yPercentContent - 50) * -0.2;

      const xTranslateBackground = (xPercentBackground - 50) * ((Math.sqrt(2) * -1.4)*Math.PI);
      const yTranslateBackground = (yPercentBackground - 50) * ((Math.sqrt(2) * -1.4)*Math.PI);
      const xTranslateContent = (xPercentContent - 50) * ((Math.sqrt(2) * -2)*Math.PI);
      const yTranslateContent = (yPercentContent - 50) * ((Math.sqrt(2) * -2)*Math.PI);

      backgroundRef.current.style.transform = `perspective(600px) rotateX(${yRotateBackground}deg) rotateY(${xRotateBackground}deg) translateX(${xTranslateBackground}px) translateY(${yTranslateBackground}px)`;
      cardContainerRef.current.style.transform = `perspective(600px) rotateX(${yRotateContent}deg) rotateY(${xRotateContent}deg) translateX(${xTranslateContent}px) translateY(${yTranslateContent}px)`;
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
        <div ref={backgroundRef} className='background' style={{backgroundImage: `url(${Img1})`}}>
        </div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
