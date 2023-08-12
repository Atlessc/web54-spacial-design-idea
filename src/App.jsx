import './App.css'
import React, {useEffect, useRef } from 'react'
import Img1 from './assets/space-1.jpg'
import HomeImg from './assets/home.png'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

function Camera() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.x = Math.sin(clock.getElapsedTime()) * 5;
  });
  return <PerspectiveCamera ref={ref} makeDefault position={[0, 0, 5]} />;
}

extend({TrackballControls});

function Controls() {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    controls.current = new TrackballControls(camera, gl.domElement);
    // configure controls here
    controls.current.rotateSpeed = 1.0;
    controls.current.zoomSpeed = 1.2;
    controls.current.panSpeed = 0.8;
    controls.current.noZoom = true;
    controls.current.noPan = true;
    return () => controls.current.dispose();
  }, [])
}

function App() {
  const x = (document.body.scrollWidth / 2);
  const y = (document.body.scrollHeight / 2);

  return (
    <>
      <div className='app'>
        <Canvas className='background-img' style={{backgroundImage: `url(${Img1})`}}>
          <Camera />
          <Controls />
        </Canvas>
        <div className='content'>
          <div className='nav-container'>
            <div></div>
            <div></div>
            <div>{HomeImg}</div>
          </div>
          <div className='card-container'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
