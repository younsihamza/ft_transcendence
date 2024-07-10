import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Canvas} from '@react-three/fiber'
import './App.css'
import Game from './components/game'
import {OrbitControls} from "@react-three/drei";

function App() {

  return (
    <>
    <div style={{ width: "100vw", height: "100vh",  background: 'black'}} >
      <Canvas  camera={{position: [0, 1, 5], fav: 75}} >
        <ambientLight/>
        <OrbitControls/>
        <Game/>
      </Canvas>
    </div>
    </>
  )
}

export default App
