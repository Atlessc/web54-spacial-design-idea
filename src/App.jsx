import './App.css'
import React, {useEffect, useRef } from 'react'
import Img1 from './assets/space-1.jpg'
import Img2 from './assets/space-2.jpg'
import HomeImg from './assets/home.png'
import LoveImg from './assets/love.png'
import Profile from './assets/user.png'
import Support from './assets/mug.png'
import Comment from './assets/comment.png'

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

      const xPan = (xPercent - 50) / 1.5;
      const yPan = (yPercent - 50) / 1.5;

      backgroundRef.current.style.backgroundPosition = `${xPan}% ${yPan}%`;
      cardContainerRef.current.style.transform = `translate(${xPan}px, ${yPan}px)`;
    });
  }, []);

  return (
    <>
      <div className='app'>
        <div ref={backgroundRef} className='background-img' style={{backgroundImage: `url(${Img1})`}}></div>
        <div ref={contentRef} className='content'>
          <div className='nav-container'>
            <div><img className="nav-btn" src={Support} /></div>
            <div><img className="nav-btn" src={HomeImg} /></div>
            <div><img className="nav-btn" src={Profile} /></div>
          </div>
          <div ref={cardContainerRef} className='card-container'>
            <div className='card-item'>
              <div className="card-author"><div className='interaction-pfp'>0</div>Author</div>
              <div><img className='post-img' src={Img2} /></div>
              <div className="card-postInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore nulla fugiat est enim repudiandae quaerat!</div>
              <div className="card-interaction">
                <div><img className='interaction-like' src={LoveImg} /></div>
                <div><img className='interaction-comment' src={Comment}/></div>
              </div>
            </div>
            <div className='card-item'>
              <div className="card-author"><div className='interaction-pfp'>0</div>Author</div>
              <div><img className='post-img' src={Img2} /></div>
              <div className="card-postInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore nulla fugiat est enim repudiandae quaerat!</div>
              <div className="card-interaction">
                <div><img className='interaction-like' src={LoveImg} /></div>
                <div><img className='interaction-comment' src={Comment}/></div>
              </div>
            </div>
            <div className='card-item'>
              <div className="card-author"><div className='interaction-pfp'>0</div>Author</div>
              <div><img className='post-img' src={Img2} /></div>
              <div className="card-postInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore nulla fugiat est enim repudiandae quaerat!</div>
              <div className="card-interaction">
                <div><img className='interaction-like' src={LoveImg} /></div>
                <div><img className='interaction-comment' src={Comment}/></div>
              </div>
            </div>
            <div className='card-item'>
              <div className="card-author"><div className='interaction-pfp'>0</div>Author</div>
              <div><img className='post-img' src={Img2} /></div>
              <div className="card-postInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore nulla fugiat est enim repudiandae quaerat!</div>
              <div className="card-interaction">
                <div><img className='interaction-like' src={LoveImg} /></div>
                <div><img className='interaction-comment' src={Comment}/></div>
              </div>
            </div>
            <div className='card-item'>
              <div className="card-author"><div className='interaction-pfp'>0</div>Author</div>
              <div><img className='post-img' src={Img2} /></div>
              <div className="card-postInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore nulla fugiat est enim repudiandae quaerat!</div>
              <div className="card-interaction">
                <div><img className='interaction-like' src={LoveImg} /></div>
                <div><img className='interaction-comment' src={Comment}/></div>
              </div>
            </div>
            <div className='card-item'>
              <div className="card-author"><div className='interaction-pfp'>0</div>Author</div>
              <div><img className='post-img' src={Img2} /></div>
              <div className="card-postInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore nulla fugiat est enim repudiandae quaerat!</div>
              <div className="card-interaction">
                <div><img className='interaction-like' src={LoveImg} /></div>
                <div><img className='interaction-comment' src={Comment}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
